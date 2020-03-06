import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateEventDto } from '../../data-info/entry-dto/event.dto';

import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) { }
  
  @Get()
  loadEvents() {
      return this.eventsService.getEvents();
  }

  @Get(':eventId')
  loadEventDetails(@Param('eventId') id) {
      return this.eventsService.getEventDetails(id);
  }

  @Post()
  addEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.addEvent(createEventDto);
  }

  @Put(':id')
  updateEvent(
    @Param('id') id,
    @Body() updateEventDto: CreateEventDto
  ) {
    return this.eventsService.updateEvent(id, updateEventDto);
  }

  @Delete(':id')
  deleteEvent(@Param('eventId') id) {
    return this.eventsService.deleteEvent(id);
  }
}
