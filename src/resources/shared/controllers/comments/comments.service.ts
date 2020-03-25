import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
        
    async getComments(entity, entityId, pageNumber) {
       return 'some comments form db';
    }

    deleteComments(commentId) {
        return 'comment deleted successfully';
    }
}
