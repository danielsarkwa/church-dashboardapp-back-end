import { Module } from '@nestjs/common';

import { SermonsModule } from './sermons/sermons.module';
import { PodcastModule } from './podcasts/podcasts.module';
import { ArticlesModule } from './articles/articles.module';
import { FeedsModule } from './feeds/feeds.module';
import { AnnouncementModule } from './announcements/announcements.module';
import { EventModule } from './events/events.module';

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
      AnnouncementModule,
      EventModule
    ],
    controllers: [
      HelpSupportController,
      UsersController,
      AdminsController
    ],
    providers: [
      HelpSupportService,
      UsersService,
      AdminsService
    ]
})
export class ResourcesModule { }