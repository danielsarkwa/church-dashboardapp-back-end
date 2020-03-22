import { Module } from '@nestjs/common';

import { SermonsModule } from './sermons/sermons.module';
import { PodcastModule } from './podcasts/podcasts.module';
import { ArticlesModule } from './articles/articles.module';
import { FeedsModule } from './feeds/feeds.module';
import { AnnouncementModule } from './announcements/announcements.module';
import { EventModule } from './events/events.module';
import { UsersModule } from './users/users.module';

import { HelpSupportController } from './help-support/help-support.controller';
import { HelpSupportService } from './help-support/helpSupport.service';

@Module({
    imports: [
      SermonsModule,
      PodcastModule,
      ArticlesModule,
      FeedsModule,
      AnnouncementModule,
      EventModule,
      UsersModule
    ],
    controllers: [
      HelpSupportController
    ],
    providers: [
      HelpSupportService
    ]
})
export class ResourcesModule { }