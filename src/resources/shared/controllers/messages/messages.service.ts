import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
        
    getMessages(entity, pageNumber) {
        return 'all messages';
    }

    deleteMessages(commentId) {
        return 'message deleted successfully';
    }
}
