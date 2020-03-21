import { Module } from '@nestjs/common';

import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

import { articlesProvider } from './schema/article.provider';
import { foldersProvider } from '../shared/schemas/folder.provider';

import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ArticlesController],
    providers: [
        ArticlesService,
        articlesProvider,
        foldersProvider
    ]
})
export class ArticlesModule {}
