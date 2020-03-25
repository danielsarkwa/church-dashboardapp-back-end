import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { 
    NotFoundException,
    BadRequestException,
    CustomException
} from '../../../shared/exceptions';

import * as mongoose from 'mongoose';

import { Comment } from '././schema/comment.interface';

@Injectable()
export class CommentsService {
    constructor(
        @Inject('COMMENT_MODEL')
        private CommentModel: Model<Comment>,
    ) {}
        
    async getComments(entity, entityId, pageNumber) {
       try {
            const comments = await this.CommentModel.find({'cmtType': entity, 'cmtTypeId': entityId});
            if (comments.length > 0) {
                return comments;
            } else {
                throw new NotFoundException('Comments not found');
            };
       } catch (ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
       }
    }

    async deleteComment(commentId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(commentId)) {
                throw new BadRequestException('Invalid comment Id');
            };
            const toDelete = await this.CommentModel.findById(commentId);
            if(toDelete) {
                await toDelete.remove();
                return 'Comment deleted succesfully';    
            } else {
                throw new NotFoundException('comment not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete comments');
            }
        }
    }
}
