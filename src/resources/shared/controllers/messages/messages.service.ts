import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { 
    NotFoundException,
    BadRequestException,
    CustomException
} from '../../../shared/exceptions';

import * as mongoose from 'mongoose';

import { Message } from '././schema/message.interface';

@Injectable()
export class MessagesService {
    constructor(
        @Inject('MESSAGE_MODEL')
        private MessageModel: Model<Message>,
    ) {}
        
    async getMessages(entity, entityId, pageNumber) {
        try {
            const perPage = 10;
            const page = pageNumber ? pageNumber : 1;
            const messages = await this.MessageModel
                .find({'msgType': entity, 'msgTypeId': entityId})
                .skip((perPage * page) - perPage)
                .limit(perPage);
            if (messages.length > 0) {
                return {
                    results: messages
                };
            } else {
                throw new NotFoundException('Message not found');
            };
       } catch (ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
       }  
    }

    async deleteMessages(messageId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(messageId)) {
                throw new BadRequestException('Invalid message Id');
            };
            const toDelete = await this.MessageModel.findById(messageId);
            if(toDelete) {
                await toDelete.remove();
                return 'Message deleted succesfully';    
            } else {
                throw new NotFoundException('Message not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete messages');
            }
        }
    }
}
