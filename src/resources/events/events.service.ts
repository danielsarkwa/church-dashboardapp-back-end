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

import { Event } from './schema/event.interface';

import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';

@Injectable()
export class EventsService {
    constructor(
        @Inject('EVENT_MODEL')
        private eventModel: Model<Event>,
        private adminNotificationService: DhbNotificationService,
    ) { }

    async getEvents(start, end) {
        try {
            const events = await this.eventModel.find({});
            if (events.length > 0) {
                const eventsList = [];
                events.forEach(article => {
                    const listData = _lodash.pick(article, ['_id', 'viewColor', 'title', 'coverImg', 'date', 'time', 'stats', 'commentsData.totalCmts', 'messagesData.totalMsgs']);
                    eventsList.push(listData);
                });
                return eventsList;
            } else {
                throw new NotFoundException('Events not found');
            }
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        }
    }

    async getEventDetails(eventId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(eventId)) {
                throw new BadRequestException('Invalid event Id');
            };
            const eventDetails = await this.eventModel.findById(eventId);
            if(eventDetails) {
               return eventDetails;
            } else {
                throw new NotFoundException('Specified event not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new InternalServerErrorException('Could not retrieve data');
            }
        };
    }

    async addEvent(data) {
        try {
            const newEvent = await new this.eventModel(data);
            await newEvent.save();
            // add notification to database
            const notificationData = {
                // test admin user, this is creating the sermon from his point to create notification for all 
                // other admin members in the sermon notes group to see
                userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                action: 'Posted event',
                title: newEvent.title,
                group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
            };
            this.adminNotificationService.addNotification(notificationData);
            return 'Event created successfully';
        } catch(ex) {
            if (ex.message) {
                throw new BadRequestException(ex.message);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add new event');
            }
        }
    }

    async updateEvent(eventId, data) {
        try {
            if(!mongoose.Types.ObjectId.isValid(eventId)) {
                throw new BadRequestException('Invalid event Id');
            };
            const toUpdate = await this.eventModel.findById(eventId);
            if (toUpdate) {
                const possibleUpdates = _lodash.pick(data, ['title', 'coverImg', 'details', 'tags', 'date', 'time', 'desc']);
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
                    action: 'Updated event',
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
                throw new BadRequestException('Could not update event');
            }
        }
    }

    async deleteEvent(eventId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(eventId)) {
                throw new BadRequestException('Invalid event Id');
            };
            const toDelete = await this.eventModel.findById(eventId);
            if(toDelete) {
                await toDelete.remove();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Deleted event',
                    title: toDelete.title,
                    group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Event deleted successfully';
            } else {
                throw new InternalServerErrorException('Event not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete event');
            }
        }
    }
}
