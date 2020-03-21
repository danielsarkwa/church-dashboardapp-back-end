import { Module } from '@nestjs/common';

import { PodcastsController } from './podcasts.controller';
import { PodcastsService } from './podcasts.service';

import { podcastProvider } from './schema/podcast.provider';
import { foldersProvider } from '../shared/schemas/folder.provider';

import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PodcastsController],
    providers: [
        PodcastsService,
        podcastProvider,
        foldersProvider
    ]
})
export class PodcastModule {}
