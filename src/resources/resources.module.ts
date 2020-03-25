import { Module } from '@nestjs/common';

import { SermonsModule } from './sermons/sermons.module';
import { PodcastModule } from './podcasts/podcasts.module';
import { ArticlesModule } from './articles/articles.module';
import { FeedsModule } from './feeds/feeds.module';
import { AnnouncementModule } from './announcements/announcements.module';
import { EventModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { HelpSupportModule } from './help-support/help-support.module';
import { CommentsModule } from './shared/controllers/comments/comments.module';
import { MessagesModule } from './shared/controllers/messages/messages.module';
import { SharedModule } from './shared/shared.module';

@Module({
    imports: [
      SermonsModule,
      PodcastModule,
      ArticlesModule,
      FeedsModule,
      AnnouncementModule,
      EventModule,
      UsersModule,
      HelpSupportModule,
      CommentsModule,
      MessagesModule,
      SharedModule
    ]
})
export class ResourcesModule { }