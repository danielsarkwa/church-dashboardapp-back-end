import { Module } from '@nestjs/common';
import { CommentsModule } from './controllers/comments/comments.module';
import { MessagesModule } from './controllers/messages/messages.module';

@Module({
    imports: [
        CommentsModule,
        MessagesModule
    ],
    exports: [
        CommentsModule,
        MessagesModule
    ]
})
export class SharedModule {}
