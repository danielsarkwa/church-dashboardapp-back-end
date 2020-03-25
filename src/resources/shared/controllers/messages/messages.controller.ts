import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Get(':entity/:entityId')
  async loadMessages(
      @Param('entity') entity,
      @Param('entityId') entityId,
      @Query('pageNumber') pageNumber
      ) {
    return await this.messagesService.getMessages(entity, entityId, pageNumber);
  }

  @Delete(':commentId')
  async deleteMessage(@Param('commentId') id) {
    return await this.messagesService.deleteMessages(id);
  }

}
