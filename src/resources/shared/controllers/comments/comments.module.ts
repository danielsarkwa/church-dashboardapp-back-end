import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { commentsProvider } from './schema/comment.provider';
import { DatabaseModule } from '../../../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [
        CommentsController
    ],
    providers: [
        CommentsService,
        commentsProvider
    ]
})
export class CommentsModule {}
