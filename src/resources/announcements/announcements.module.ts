import { Module } from '@nestjs/common';

import { AnnouncementsController } from './announcements.controller';
import { AnnouncementsService } from './announcements.service';

import { AnnouncementProvider } from './schema/announcement.provider';

import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AnnouncementsController],
    providers: [
        AnnouncementsService,
        AnnouncementProvider
    ]
})
export class AnnouncementModule {}
