import { Injectable, Inject } from "@nestjs/common";
import { Model } from "mongoose";

import { 
    NotFoundException, 
    BadRequestException 
} from "src/resources/shared/exceptions";

import { DhbNotification } from "./schema/dhb.notification.interface";
import { UsersService } from "src/resources/users/users.service";

@Injectable()
export class DhbNotificationService {
    constructor(
        @Inject('ADMIN_NOTIFICATION_MODEL')
        private notificationModel: Model<DhbNotification>,
        private userService: UsersService,
        ) { }

    async getAllNofication(userId) {
        try {
            const user = await this.userService.getUserDetails(userId);
            if (user.role.groups.length > 0) {
                const notifications = [];
                for(const group of user.role.groups) {
                    const groupNotification = await this.notificationModel.find({'group': group });
                    for(const notification of groupNotification) {
                        if (notification['viewers'].indexOf(userId) > -1) {
                            notifications.push(notification);
                        }
                    }
                }
                if (notifications.length > 0) {
                    return notifications;
                } else {
                    throw new NotFoundException('notification are empty');
                };
            } else {
                throw new NotFoundException('notification not found'); 
            }
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async addNotification(data) {
        try {
            const groupData = {
                groupName: data.group,
                type: 'admin'
            };
            const groupMembers = await this.userService.getGroupMembers(groupData);
            const notificationData = {
                viewers: [...groupMembers],
                ...data
            };
            const notification = await new this.notificationModel(notificationData);
            await notification.save();
            return 'notification added successfully';
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not add notification');
            }
        }
    }

    async markAsSeen(notificationId, userId) {
        /**
         * if the notification created date is also more then two weeks remove the notification from db
         */
        const toUpdate = await this.notificationModel.findById(notificationId);
        toUpdate.viewers = toUpdate.viewers.filter(viewer => {
            return viewer !== userId;
        });
        if (toUpdate.viewers.length == 0) {
            await toUpdate.remove();
        } else {
            await toUpdate.save();
        }
        return 'notification updated successfully';
    }
    
}

// automate this process with AWS SNS later with angular web or electron