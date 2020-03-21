import { Module } from '@nestjs/common';

import { FeedsController } from './feeds.controller';
import { FeedsService } from './feeds.service';

import { feedsProvider } from './schema/feeds.provider';

import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [FeedsController],
    providers: [
        FeedsService,
        feedsProvider
    ]
})
export class FeedsModule {}
