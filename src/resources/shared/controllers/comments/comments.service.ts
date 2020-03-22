import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
        
    getComments(entity, pageNumber) {
        return 'all comments';
    }

    deleteComments(commentId) {
        return 'comment deleted successfully';
    }
}
