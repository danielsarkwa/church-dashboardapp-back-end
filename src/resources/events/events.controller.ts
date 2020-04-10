import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateEventDto } from '../../adapter/entry-dto/event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) { }
  
  @Get()
  async loadEvents(@Body() getData) {
    return await this.eventsService.getEvents(getData);
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
