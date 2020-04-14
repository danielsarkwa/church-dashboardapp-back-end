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

import { Sermon } from '././schema/sermon.interface';
import { Folder } from '../shared/schemas/folder.interface';

import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';

@Injectable()
export class SermonsService {
    constructor(
        @Inject('SERMON_MODEL')
        private SermonModel: Model<Sermon>,
        @Inject('FOLDER_MODEL')
        private FolderModel: Model<Folder>,
        private adminNotificationService: DhbNotificationService,
        ) { }
        
    async getSeries(pageNumber) {
        try {
            const perPage = 10;
            const page = pageNumber ? pageNumber : 1;
            const series = await this.FolderModel
                .find({'belongsTo': 'sermon'}).skip((perPage * page) - perPage).limit(perPage);
            if (series.length > 0) {
                return {
                    results: series
                };
            } else {
                throw new NotFoundException('Series not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async getSeriesDetails(seriesId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(seriesId)) {
                throw new BadRequestException('Invalid series Id');
            };
            const seriesDetails = await this.FolderModel.findById(seriesId);
            if(seriesDetails) {
                return seriesDetails;
            } else {
                throw new NotFoundException('Specified series not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new InternalServerErrorException('Could not retrieve data');
            }
        };
    }

    async getAllSermons(pageNumber) {
        try {
            const perPage = 10;
            const page = pageNumber ? pageNumber : 1;
            const sermons = await this.SermonModel
                .find({}).skip((perPage * page) - perPage).limit(perPage);
            if (sermons.length > 0) {
                const sermonsLists = [];
                sermons.forEach(article => {
                    const listData = _lodash.pick(article, ['_id', 'title', 'seriesId', 'coverImg', 'details.desc', 'stats', 'details.speaker','commentsData.totalCmts', 'messagesData.totalMsgs']);
                    sermonsLists.push(listData);
                });
                return {
                    results: sermonsLists
                };
            } else {
                throw new NotFoundException('Sermons not found');
            }
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        }
    }

    async getSermon(sermonId, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(sermonId)) {
                throw new BadRequestException('Invalid sermon Id');
            };
            const sermonDetails = await this.SermonModel.findById(sermonId);
            if(sermonDetails) {
                if (state == 'details') {
                    return sermonDetails;
                } else {
                    const listData = _lodash.pick(sermonDetails, ['_id', 'title', 'seriesId', 'coverImg', 'details.speaker', 'stats']);
                    return listData;
                }
            } else {
                throw new NotFoundException('Specified sermon not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async addSermon(data): Promise<string> {
        try {
            let newSermon = await this.SermonModel.findOne({ 'title': data.title });
            if(newSermon) {
                throw new BadRequestException('Sermon already exit');
            } else {
                newSermon = await new this.SermonModel(data);
            };
            const updateData = {
                files: [
                    {
                        fileId: newSermon._id,
                        duration: data.duration
                    }
                ]
            };
            const updateDataMeta = {
                seriesId: mongoose.Types.ObjectId(newSermon.seriesId),
                data: JSON.stringify(updateData)
            };
            const updateSeriesRes = await this.updateSeries(updateDataMeta.seriesId, JSON.parse(updateDataMeta.data), 'add');
            if (updateSeriesRes == 'series updated successfully') {
                await newSermon.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Posted sermon',
                    title: newSermon.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Sermon created successfully';
            } else {
                throw new InternalServerErrorException('Could not add sermon to series');
            }
        } catch (ex) {
            if (ex.message) {
                throw new BadRequestException(ex.message);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add sermon');
            }
        };
    }

    async addSeries(data): Promise<string> {
        try {
            let newSeries = await this.FolderModel.findOne({ 'title': data.title });
            if(newSeries) {
                throw new BadRequestException('Series already exit');
            } else {
                newSeries = await new this.FolderModel(data);
                await newSeries.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Added sermon series',
                    title: newSeries.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Series created successfully';
            };
        } catch(ex) {
            if (ex.response) {
                throw new BadRequestException(ex.response);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add new sermon series');
            }
        }
    }

    async updateSermon(sermonId, data) {
        try {
            if(!mongoose.Types.ObjectId.isValid(sermonId)) {
                throw new BadRequestException('Invalid sermon Id');
            };
            const toUpdate = await this.SermonModel.findById(sermonId);
            if (toUpdate) {
                const possibleUpdates = _lodash.pick(data, [
                    'title', 'coverImg', 'seriesId', 'audioUrl', 'duration','details', 'moveTo'
                ]);
                for(const item in possibleUpdates) {
                    if (item == 'details') {
                        for (const detailsItems in possibleUpdates.details) {
                            toUpdate.details[detailsItems] = possibleUpdates.details[detailsItems];
                        }
                    } else {
                        if (item == 'title') {
                            const another = await this.SermonModel.findOne({ 'title': possibleUpdates.title });
                            if(another) {
                                throw new BadRequestException('Sermon already exit');
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
                                this.updateSeries(toUpdate.seriesId, JSON.parse(JSON.stringify(updateData)), 'update')
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
                                        seriesId: mongoose.Types.ObjectId(toUpdate.seriesId),
                                        data: JSON.stringify(moveData),
                                        to: data.moveTo
                                    };
                                    if(!mongoose.Types.ObjectId.isValid(moveDataMeta.seriesId)) {
                                        throw new BadRequestException('Invalid series Id');
                                    };
                                    if(!mongoose.Types.ObjectId.isValid(moveDataMeta.to)) {
                                        throw new BadRequestException('Invalid series Id');
                                    };
                                    const fromFolder = await this.FolderModel.findById(moveDataMeta.seriesId);
                                    const toFolder = await this.FolderModel.findById(moveDataMeta.to);
                                    if (fromFolder && toFolder) {
                                        toUpdate.seriesId = moveDataMeta.to;
                                        const removeRes = await this.updateSeries(moveDataMeta.seriesId, JSON.parse(moveDataMeta.data), 'delete');
                                        if (removeRes == 'series updated successfully') {
                                            const addRes = await this.updateSeries(moveDataMeta.to, JSON.parse(moveDataMeta.data), 'add');
                                            if (addRes !== 'series updated successfully') {
                                                throw new InternalServerErrorException('Could not move sermon to new series');   
                                            }
                                            } else {
                                                throw new InternalServerErrorException('Could not move sermon');
                                            }
                                        } else {
                                            throw new BadRequestException('one of the series not found');
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
                    action: 'Edited sermon',
                    title: toUpdate.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Sermon updated successfully';
            } else {
                throw new NotFoundException('Sermon not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update sermon');
            }
        }
    }

    async updateSeries(seriesId, data, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(seriesId)) {
                throw new BadRequestException('Invalid Series Id');
            };
            const toUpdate = await this.FolderModel.findById(seriesId);
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
                                    throw new BadRequestException('Series already exit');
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
                    action: 'Edited sermon series',
                    title: toUpdate.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'series updated successfully';
            } else {
                throw new NotFoundException('Series not found');
            };
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update sermon series');
            }
        };
    }

    async deleteSermon(sermonId): Promise<string> {
        try {
            if(!mongoose.Types.ObjectId.isValid(sermonId)) {
                throw new BadRequestException('Invalid sermon Id');
            };
            const toDelete = await this.SermonModel.findById(sermonId);
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
                    seriesId: mongoose.Types.ObjectId(toDelete.seriesId),
                    data: JSON.stringify(deleteData)
                };
                const deleteSeriesRes = await this.updateSeries(deleteDataMeta.seriesId, JSON.parse(deleteDataMeta.data), 'delete');
                if (deleteSeriesRes === 'series updated successfully') {
                    const delSermon = await this.SermonModel.findByIdAndRemove(sermonId);
                    if (delSermon) {
                        // add notification to database
                        const notificationData = {
                            // test admin user, this is creating the sermon from his point to create notification for all 
                            // other admin members in the sermon notes group to see
                            userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                            action: 'Deleted sermon',
                            title: delSermon.title,
                            group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                        };
                        this.adminNotificationService.addNotification(notificationData);
                        return 'sermon deleted successfully';
                    } else {
                       throw new InternalServerErrorException('Could not delete sermon');
                    }
                } else {
                    throw new InternalServerErrorException('Could not remove sermon from series');
                }
            } else {
                throw new NotFoundException('Sermon not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete sermon');
            }
        }
    }

    async deleteSeries(seriesId): Promise<string> {
        try {
            if(!mongoose.Types.ObjectId.isValid(seriesId)) {
                throw new BadRequestException('Invalid series Id');
            };
            const toDelete = await this.FolderModel.findById(seriesId);
            if(toDelete) {
                if (toDelete.files.length > 0) {
                    toDelete.files.forEach(async file => {
                        const fileId = mongoose.Types.ObjectId(file);
                        const deleteFile = await this.SermonModel.findByIdAndRemove(fileId);
                        if(!deleteFile) {
                            throw new InternalServerErrorException('Could not all delete sermon series');
                        };
                    });
                };
                await toDelete.remove();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Deleted sermon series',
                    title: toDelete.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Series deleted succesfully';             
            } else {
                throw new NotFoundException('Series not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete sermon series');
            }
        }
    }
}

// //Page 1
// db.users.find().limit (10)
// //Page 2
// db.users.find().skip(10).limit(10)
// //Page 3
// db.users.find().skip(20).limit(10)


// lasted values
//Questions.findOne({}, { sort: { _id: -1 }, limit: 1 });