import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { messagesProvider } from './schema/message.provider';
import { DatabaseModule } from '../../../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [MessagesController],
    providers: [
        MessagesService,
        messagesProvider
    ]
})
export class MessagesModule {}
