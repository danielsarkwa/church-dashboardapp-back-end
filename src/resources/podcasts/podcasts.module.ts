import { Module } from '@nestjs/common';

import { PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';

import { podcastProvider } from './schema/podcast.provider';
import { foldersProvider } from '../shared/schemas/folder.provider';

import { DatabaseModule } from '../../system/config/database/database.module';
import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';
import { DhbNotificationProvider } from '../../system/push-notification/dashboard/schema/dhb.notification.provider';

// this is to make the applicatition work well -- cos it injects service classes that uses them
import { UsersService } from '../users/users.service';
import { UserProvider } from '../users/schema/user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [PodcastsController],
    providers: [
        PodcastsService,
        podcastProvider,
        foldersProvider,
        DhbNotificationService,
        DhbNotificationProvider,
        // this is to make the applicatition work well
        UsersService,
        UserProvider
    ]
})
export class PodcastModule {}
