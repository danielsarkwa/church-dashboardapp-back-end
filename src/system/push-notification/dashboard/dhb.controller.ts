import { Controller, Post, Put, Param, Query } from '@nestjs/common';
import { DhbNotificationService } from './dhb.service';

@Controller('notifications')
export class DhbNotificationController {
    constructor(private notificationService: DhbNotificationService) {}

    @Post()
    async getAllNofication(@Query('userId') userId) {
        return await this.notificationService.getAllNofication(userId);
    }

    @Put(':notificationId')
    async markAsSeen(
        @Param('notificationId') notificationId,
        @Query('userId') userId
        ) {
        return await this.notificationService.markAsSeen(notificationId, userId);
    }
}
