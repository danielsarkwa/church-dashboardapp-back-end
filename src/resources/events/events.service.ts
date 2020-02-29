import { Injectable } from '@nestjs/common';

import { events, eventsDetails } from '../../demo-database/resources(all are tables)/events-data';

@Injectable()
export class EventsService {
    getEvents() {
        return events;
    }

    getEventDetails(id) {
        return eventsDetails;
    }
}
