import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreateEventDto } from '../../data-info/entry-dto/event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) { }
  
  @Get()
  async loadEvents(
    @Query('from') start,
    @Query('to') end
  ) {
    return await this.eventsService.getEvents(start, end);
  }

  @Get(':eventId')
  async loadEventDetails(
    @Param('eventId') id) {
      return await this.eventsService.getEventDetails(id);
  }

  @Post()
  async addEvent(@Body() createEventDto: CreateEventDto) {
    return await this.eventsService.addEvent(createEventDto);
  }

  @Put(':eventId')
  async updateEvent(
    @Param('eventId') id,
    @Body() updateEventDto: CreateEventDto
  ) {
    return await this.eventsService.updateEvent(id, updateEventDto);
  }

  @Delete(':eventId')
  async deleteEvent(@Param('eventId') id) {
    return await this.eventsService.deleteEvent(id);
  }

}
