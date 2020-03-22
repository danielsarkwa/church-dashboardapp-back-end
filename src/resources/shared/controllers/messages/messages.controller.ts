import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Get(':entity/:entityId')
  async loadMessages(
      @Param('entity') entity,
      @Query('pageNumber') pageNumber
      ) {
    return await this.messagesService.getMessages(entity, pageNumber);
  }

  @Delete(':commentId')
  async deleteMessage(@Param('sermonId') id) {
    return await this.messagesService.deleteMessages(id);
  }

}
