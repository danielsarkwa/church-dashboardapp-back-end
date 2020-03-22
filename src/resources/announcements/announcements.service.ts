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

@Injectable()
export class AnnouncementsService {
    constructor(
        @Inject('ANNOUNCEMENT_MODEL')
        private announcementModel: Model<Announcement>,
    ) { }
    
    async getAnnouncements() {
        try {
            const announcements = await this.announcementModel.find({});
            if (announcements.length > 0) {
                const announcementsList = [];
                announcements.forEach(article => {
                    const listData = _lodash.pick(article, ['_id', 'title', 'coverImg', 'details.from', 'stats', 'createdAt', 'commentsData.totalCmts']);
                    announcementsList.push(listData);
                });
                return announcementsList;
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
