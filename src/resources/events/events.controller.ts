import { Controller, Get, Param } from '@nestjs/common';

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
}
