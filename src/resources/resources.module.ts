import { Module } from '@nestjs/common';

import { FeedsController } from './feeds/feeds.controller';
import { FeedsService } from './feeds/feeds.service';

import { SermonsModule } from './sermons/sermons.module';
import { PodcastModule } from './podcasts/podcasts.module';

import { ArticlesController } from './articles/articles.controller';
import { ArticlesService } from './articles/articles.service';

import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';

import { AnnouncementsController } from './announcements/announcements.controller';
import { AnnouncementsService } from './announcements/announcements.service';

import { HelpSupportController } from './help-support/help-support.controller';
import { HelpSupportService } from './help-support/helpSupport.service';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';

@Module({
    imports: [
      SermonsModule,
      PodcastModule
    ],
    controllers: [
      FeedsController,
      EventsController, 
      AnnouncementsController, 
      HelpSupportController,
      ArticlesController,
      UsersController,
      AdminsController
    ],
    providers: [
      FeedsService,
      ArticlesService,
      EventsService,
      AnnouncementsService,
      HelpSupportService,
      UsersService,
      AdminsService
    ]
})
export class ResourcesModule { }