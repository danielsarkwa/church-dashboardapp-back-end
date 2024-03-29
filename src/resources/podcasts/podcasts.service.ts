import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { 
    NotFoundException,
    BadRequestException,
    CustomException,
    InternalServerErrorException
} from '../shared/exceptions';

import * as mongoose from 'mongoose';
import * as _lodash from 'lodash';

import { Podcast } from './schema/podcast.interface';
import { Folder } from '../shared/schemas/folder.interface';

import { DhbNotificationService } from 'src/system/push-notification/dashboard/dhb.service';

@Injectable()
export class PodcastsService {
    constructor(
        @Inject('PODCAST_MODEL')
        private PodcastModel: Model<Podcast>,
        @Inject('FOLDER_MODEL')
        private FolderModel: Model<Folder>,
        private adminNotificationService: DhbNotificationService,
    ) { }

    async PodcastChannels(pageNumber) {
        try {
            const perPage = 10;
            const page = pageNumber ? pageNumber : 1;
            const channels = await this.FolderModel
                .find({'belongsTo': 'podcast'}).skip((perPage * page) - perPage).limit(perPage);
            if (channels.length > 0) {
                return {
                    results: channels
                };
            } else {
                throw new NotFoundException('Channels not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async PodcastChannel(channelId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(channelId)) {
                throw new BadRequestException('Invalid channel Id');
            };
            const folderDetails = await this.FolderModel.findById(channelId);
            if(folderDetails) {
                return folderDetails;
            } else {
                throw new NotFoundException('Specified channel not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new InternalServerErrorException('Could not retrieve data');
            }
        };
    }

    async getPodcast(podcastId, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(podcastId)) {
                throw new BadRequestException('Invalid podcast Id');
            };
            const podcastDetails = await this.PodcastModel.findById(podcastId);
            if(podcastDetails) {
                if (state == 'details') {
                    return podcastDetails;
                } else {
                    const listData = _lodash.pick(podcastDetails, ['_id', 'title', 'channelId', 'coverImg', 'details.speaker.guests', 'stats']);
                    return listData;
                }
            } else {
                throw new NotFoundException('Specified podcast not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async addPodcast(data) {
        try {
            let newPodcast = await this.PodcastModel.findOne({ 'title': data.title });
            if(newPodcast) {
                throw new BadRequestException('Podcast already exit');
            } else {
                newPodcast = await new this.PodcastModel(data);
            };
            const updateData = {
                files: [
                    {
                        fileId: newPodcast._id,
                        duration: data.duration
                    }
                ]
            };
            const updateDataMeta = {
                channelId: mongoose.Types.ObjectId(newPodcast.channelId),
                data: JSON.stringify(updateData)
            };
            const updateChannelRes = await this.updateChannel(updateDataMeta.channelId, JSON.parse(updateDataMeta.data), 'add');
            if (updateChannelRes == 'channel updated successfully') {
                await newPodcast.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Posted podcast',
                    title: newPodcast.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Podcast created successfully';
            } else {
                throw new InternalServerErrorException('Could not add podcast to channel');
            }
        } catch (ex) {
            if (ex.message) {
                throw new BadRequestException(ex.message);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add podcast');
            }
        };
    }

    async addChannel(data): Promise<string> {
        try {
            let newChannel = await this.FolderModel.findOne({ 'title': data.title });
            if(newChannel) {
                throw new BadRequestException('Channel already exit');
            } else {
                newChannel = await new this.FolderModel(data);
                await newChannel.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Created channel',
                    title: newChannel.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'channel created successfully';
            };
        } catch(ex) {
            if (ex.response) {
                throw new BadRequestException(ex.response);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add podcast channel');
            }
        }
    }

    async updatePodcast(podcastId, data) {
        try {
            if(!mongoose.Types.ObjectId.isValid(podcastId)) {
                throw new BadRequestException('Invalid podcast Id');
            };
            const toUpdate = await this.PodcastModel.findById(podcastId);
            if (toUpdate) {
                const possibleUpdates = _lodash.pick(data, [
                    'title', 'coverImg', 'channelId', 'audioUrl', 'duration','details', 'moveTo'
                ]);
                for(const item in possibleUpdates) {
                    if (item == 'details') {
                        for (const detailsItems in possibleUpdates.details) {
                            toUpdate.details[detailsItems] = possibleUpdates.details[detailsItems];
                        }
                    } else {
                        if (item == 'title') {
                            const another = await this.PodcastModel.findOne({ 'title': possibleUpdates.title });
                            if(another) {
                                throw new BadRequestException('Podcast already exit');
                            } else {
                                toUpdate[item] = possibleUpdates[item];
                            };
                        } else {
                            if(item == 'audioUrl') {
                                const updateData = {
                                    oldTime: toUpdate.duration,
                                    newTime: data.duration
                                };
                                toUpdate[item] = possibleUpdates[item];
                                toUpdate['duration'] = possibleUpdates['duration'];
                                this.updateChannel(toUpdate.channelId, JSON.parse(JSON.stringify(updateData)), 'update')
                            } else {
                                if(item == 'moveTo') {
                                    const moveData = {
                                        files: [
                                            {
                                                fileId: toUpdate._id,
                                                duration: toUpdate.duration
                                            }
                                        ]
                                    };
                                    const moveDataMeta = {
                                        channelId: mongoose.Types.ObjectId(toUpdate.channelId),
                                        data: JSON.stringify(moveData),
                                        to: data.moveTo
                                    };
                                    if(!mongoose.Types.ObjectId.isValid(moveDataMeta.channelId)) {
                                        throw new BadRequestException('Invalid channel Id');
                                    };
                                    if(!mongoose.Types.ObjectId.isValid(moveDataMeta.to)) {
                                        throw new BadRequestException('Invalid channel Id');
                                    };
                                    const fromFolder = await this.FolderModel.findById(moveDataMeta.channelId);
                                    const toFolder = await this.FolderModel.findById(moveDataMeta.to);
                                    if (fromFolder && toFolder) {
                                        toUpdate.channelId = moveDataMeta.to;
                                        const removeRes = await this.updateChannel(moveDataMeta.channelId, JSON.parse(moveDataMeta.data), 'delete');
                                        if (removeRes == 'channel updated successfully') {
                                            const addRes = await this.updateChannel(moveDataMeta.to, JSON.parse(moveDataMeta.data), 'add');
                                            if (addRes !== 'channel updated successfully') {
                                                throw new InternalServerErrorException('Could not move sermon to new channel');   
                                            }
                                        } else {
                                            throw new InternalServerErrorException('Could not move sermon');
                                        }
                                        } else {
                                            throw new BadRequestException('one of the channel not found');
                                        }
                                } else {
                                    toUpdate[item] = possibleUpdates[item];
                                }
                            }
                        }
                    }
                };
                await toUpdate.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Updated podcast',
                    title: toUpdate.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'podcast updated successfully';
            } else {
                throw new NotFoundException('Podcast not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update podcast');
            }
        }
    }

    async updateChannel(channelId, data, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(channelId)) {
                throw new BadRequestException('Invalid channel Id');
            };
            const toUpdate = await this.FolderModel.findById(channelId);
            if (toUpdate) {
                if (state == 'add') {
                    const possibleUpdates = _lodash.pick(data, ['title', 'coverImg', 'files', 'desc']);
                    for(const item in possibleUpdates) {
                        if(item == 'files') {
                            for(const item of possibleUpdates['files']) {
                                toUpdate['files'].push(item.fileId);
                                ++toUpdate['numberOfFiles'];
                                toUpdate['totalTime'] += item.duration;
                            };
                        } else {
                            if (item == 'title') {
                                const another = await this.FolderModel.findOne({ 'title': possibleUpdates.title });
        
                                if(another) {
                                    throw new BadRequestException('Channel already exit');
                                } else {
                                    toUpdate[item] = possibleUpdates[item];
                                };
                            } else {
                                toUpdate[item] = possibleUpdates[item];
                            }
                        };
                    };
                } else {
                    if (state == 'update') {
                        toUpdate.totalTime -= data.oldTime;
                        toUpdate.totalTime += data.newTime;
                    } else {
                        if(state == 'delete') {
                            for(const item of data['files']) {
                                toUpdate.files = toUpdate.files.filter(file => {
                                    return file !== item.fileId;
                                });
                                toUpdate.totalTime -= item.duration;
                                --toUpdate.numberOfFiles;
                            };
                        }
                    }
                }
                await toUpdate.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Updated channel',
                    title: toUpdate.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'channel updated successfully';
            } else {
                throw new NotFoundException('Channel not found');
            };
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update podcast channel');
            }
        };
    }
    
    async deletePodcast(podcastId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(podcastId)) {
                throw new BadRequestException('Invalid podcast Id');
            };
            const toDelete = await this.PodcastModel.findById(podcastId);
            if(toDelete) {
                const deleteData = {
                    files: [
                        {
                            fileId: toDelete._id,
                            duration: toDelete.duration
                        }
                    ]
                };
                const deleteDataMeta = {
                    channelId: mongoose.Types.ObjectId(toDelete.channelId),
                    data: JSON.stringify(deleteData)
                };
                const deleteFolderRes = await this.updateChannel(deleteDataMeta.channelId, JSON.parse(deleteDataMeta.data), 'delete');
                if (deleteFolderRes === 'channel updated successfully') {
                    const delSermon = await this.PodcastModel.findByIdAndRemove(podcastId);
                    if (delSermon) {
                        // add notification to database
                        const notificationData = {
                            // test admin user, this is creating the sermon from his point to create notification for all 
                            // other admin members in the sermon notes group to see
                            userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                            action: 'Deleted podcast',
                            title: toDelete.title,
                            group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                        };
                        this.adminNotificationService.addNotification(notificationData);
                        return 'podcast deleted successfully';
                    } else {
                       throw new InternalServerErrorException('Could not delete podcast');
                    }
                } else {
                    throw new InternalServerErrorException('Could not remove podcast to channel');
                }
            } else {
                throw new NotFoundException('Podcast not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete podcast');
            }
        }
    }

    async deletePodcastChannel(channelId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(channelId)) {
                throw new BadRequestException('Invalid channel Id');
            };
            const toDelete = await this.FolderModel.findById(channelId);
            if(toDelete) {
                if (toDelete.files.length > 0) {
                    toDelete.files.forEach(async file => {
                        const fileId = mongoose.Types.ObjectId(file);
                        const deleteFile = await this.PodcastModel.findByIdAndRemove(fileId);
                        if(!deleteFile) {
                            throw new InternalServerErrorException('Could not all delete podcast channel');
                        };
                    });
                };
                await toDelete.remove();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Deleted podcast Channel',
                    title: toDelete.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Channel deleted succesfully';            
            } else {
                throw new NotFoundException('Channel not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete podcast Channel');
            }
        }
    }
}
