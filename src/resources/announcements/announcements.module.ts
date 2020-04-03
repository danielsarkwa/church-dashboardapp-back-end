import { Module } from '@nestjs/common';

import { AnnouncementsController } from './announcements.controller';
import { AnnouncementsService } from './announcements.service';

import { AnnouncementProvider } from './schema/announcement.provider';

import { DatabaseModule } from '../../system/config/database/database.module';
import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';
import { DhbNotificationProvider } from '../../system/push-notification/dashboard/schema/dhb.notification.provider';

// this is to make the applicatition work well -- cos it injects service classes that uses them
import { UsersService } from '../users/users.service';
import { UserProvider } from '../users/schema/user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [AnnouncementsController],
    providers: [
        AnnouncementsService,
        AnnouncementProvider,
        DhbNotificationService,
        DhbNotificationProvider,
        // this is to make the applicatition work well
        UsersService,
        UserProvider
    ]
})
export class AnnouncementModule {}
