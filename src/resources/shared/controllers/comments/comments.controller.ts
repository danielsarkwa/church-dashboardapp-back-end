import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Get(':entity/:entityId')
  async loadComments(
      @Param('entity') entity,
      @Param('entityId') entityId,
      @Query('pageNumber') pageNumber
      ) {
    return await this.commentsService.getComments(entity, entityId, pageNumber);
  }

  @Delete(':commentId')
  async deleteSermon(@Param('commentId') commentId) {
    return await this.commentsService.deleteComment(commentId);
  }
}
