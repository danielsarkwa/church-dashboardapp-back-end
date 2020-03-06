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

    addEvent(data) {
        return ['Event successfully added', data];
    }

    updateEvent(id, data) {
        return ['event updated successfully', data];
    }

    deleteEvent(id) {
        return 'event deleted successfully';
    }
}
