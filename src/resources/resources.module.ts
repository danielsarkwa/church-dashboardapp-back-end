import { Module } from '@nestjs/common';

import { SermonsModule } from './sermons/sermons.module';
import { PodcastModule } from './podcasts/podcasts.module';
import { ArticlesModule } from './articles/articles.module';
import { FeedsModule } from './feeds/feeds.module';
import { AnnouncementModule } from './announcements/announcements.module';

import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';

import { HelpSupportController } from './help-support/help-support.controller';
import { HelpSupportService } from './help-support/helpSupport.service';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';

@Module({
    imports: [
      SermonsModule,
      PodcastModule,
      ArticlesModule,
      FeedsModule,
      AnnouncementModule
    ],
    controllers: [
      EventsController,
      HelpSupportController,
      UsersController,
      AdminsController
    ],
    providers: [
      EventsService,
      HelpSupportService,
      UsersService,
      AdminsService
    ]
})
export class ResourcesModule { }