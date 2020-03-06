import { Module } from '@nestjs/common';

import { FeedsController } from './feeds/feeds.controller';
import { FeedsService } from './feeds/feeds.service';

import { SermonsController } from './sermons/sermons.controller';
import { SermonsService } from './sermons/sermons.service';

import { PodcastsController } from './podcasts/podcasts.controller';
import { PodcastsService } from './podcasts/podcasts.service';

import { ArticlesController } from './articles/articles.controller';
import { ArticlesService } from './articles/articles.service';

import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';

import { AnnouncementsController } from './announcements/announcements.controller';
import { AnnouncementsService } from './announcements/announcement.service';

import { HelpSupportController } from './help-support/help-support.controller';
import { HelpSupportService } from './help-support/helpSupport.service';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';

@Module({
    imports: [],
    controllers: [
      FeedsController, 
      SermonsController,
      PodcastsController, 
      EventsController, 
      AnnouncementsController, 
      HelpSupportController,
      ArticlesController,
      UsersController,
      AdminsController
    ],
    providers: [
      FeedsService,
      SermonsService,
      PodcastsService, 
      ArticlesService,
      EventsService,
      AnnouncementsService,
      HelpSupportService,
      UsersService,
      AdminsService
    ]
})
export class ResourcesModule { }