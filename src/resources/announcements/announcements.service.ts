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

import { Announcement } from './schema/announcement.interface';

import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';

@Injectable()
export class AnnouncementsService {
    constructor(
        @Inject('ANNOUNCEMENT_MODEL')
        private announcementModel: Model<Announcement>,
        private adminNotificationService: DhbNotificationService,
    ) { }
    
    async getAnnouncements(pageNumber) {
        try {
            const perPage = 10;
            const page = pageNumber ? pageNumber : 1;
            const announcements = await this.announcementModel
                .find({}).skip((perPage * page) - perPage).limit(perPage);
            if (announcements.length > 0) {
                const announcementsList = [];
                announcements.forEach(article => {
                    const listData = _lodash.pick(article, ['_id', 'title', 'coverImg', 'details.from', 'stats', 'createdAt', 'commentsData.totalCmts']);
                    announcementsList.push(listData);
                });

                return {
                    results: announcementsList
                };
            } else {
                throw new NotFoundException('Announcements not found');
            }
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        }
    }

    async getAnnouncementDetail(announcementId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(announcementId)) {
                throw new BadRequestException('Invalid announcement Id');
            };
            const announcementDetails = await this.announcementModel.findById(announcementId);
            if(announcementDetails) {
                return announcementDetails;
            } else {
                throw new NotFoundException('Specified announcement not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new InternalServerErrorException('Could not retrieve data');
            }
        };
    }

    async addAnnouncement(data) {
        try {
            const newAnnouncement = await new this.announcementModel(data);
            await newAnnouncement.save();
            // add notification to database
            const notificationData = {
                // test admin user, this is creating the sermon from his point to create notification for all 
                // other admin members in the sermon notes group to see
                userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                action: 'Posted announcement',
                title: newAnnouncement.title,
                group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
            };
            this.adminNotificationService.addNotification(notificationData);
            return 'Announcement created successfully';
        } catch(ex) {
            if (ex.message) {
                throw new BadRequestException(ex.message);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add announcement');
            }
        }
    }

    async updateAnnouncement(announcementId, data) {
        try {
            if(!mongoose.Types.ObjectId.isValid(announcementId)) {
                throw new BadRequestException('Invalid announcement Id');
            };
            const toUpdate = await this.announcementModel.findById(announcementId);
            if (toUpdate) {
                const possibleUpdates = _lodash.pick(data, ['title', 'coverImg', 'details', 'tags', 'desc']);
                for(const item in possibleUpdates) {
                    if (item == 'details') {
                        for (const detailsItems in possibleUpdates.details) {
                            toUpdate.details[detailsItems] = possibleUpdates.details[detailsItems];
                        }
                    } else {
                        toUpdate[item] = possibleUpdates[item];
                    }
                }
                await toUpdate.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Updated announcement',
                    title: toUpdate.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Announcement updated successfully';
            } else {
                throw new NotFoundException('Announcement not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update announcement');
            }
        }
    }

    async deleteAnnouncement(announcementId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(announcementId)) {
                throw new BadRequestException('Invalid announcement Id');
            };
            const toDelete = await this.announcementModel.findById(announcementId);
            if(toDelete) {
                await toDelete.remove();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Deleted announcement',
                    title: toDelete.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Announcement deleted successfully';
            } else {
                throw new InternalServerErrorException('Announcement not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete announcement');
            }
        }
    }
    
}
