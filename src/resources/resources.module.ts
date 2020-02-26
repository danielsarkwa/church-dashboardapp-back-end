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

@Module({
    imports: [],
    controllers: [
      FeedsController, 
      SermonsController,
      PodcastsController, 
      EventsController, 
      AnnouncementsController, 
      HelpSupportController,
      ArticlesController
    ],
    providers: [
      FeedsService,
      SermonsService,
      PodcastsService, 
      ArticlesService,
      EventsService,
      AnnouncementsService,
      HelpSupportService
    ]
})
export class ResourcesModule { }