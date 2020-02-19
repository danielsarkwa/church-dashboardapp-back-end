import { Module } from '@nestjs/common';

import { FeedsController } from './feeds/feeds.controller';

import { SermonsController } from './sermons/sermons.controller';

import { PodcastsController } from './podcasts/podcasts.controller';

import { ArticlesController } from './articles/articles.controller';

import { EventsController } from './events/events.controller';

import { AnnouncementsController } from './announcements/announcements.controller';

import { HelpSupportController } from './help-support/help-support.controller';

@Module({
    imports: [],
    controllers: [
      SermonsController,
      PodcastsController, 
      EventsController, 
      AnnouncementsController, 
      HelpSupportController,
      FeedsController, 
      ArticlesController
    ],
    providers: []
})
export class ResourcesModule { }