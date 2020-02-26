import { Injectable } from '@nestjs/common';

import { events } from '../../demo-database/events-data';

@Injectable()
export class EventsService {
    getEvents() {
        return events;
    }
}
