import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Get(':entity/:entityId')
  async loadComments(
      @Param('entity') entity,
      @Query('pageNumber') pageNumber
      ) {
    return await this.commentsService.getComments(entity, pageNumber);
  }

  @Delete(':commentId')
  async deleteSermon(@Param('sermonId') id) {
    return await this.commentsService.deleteComments(id);
  }

}
