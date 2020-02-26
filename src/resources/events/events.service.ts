import { Injectable } from '@nestjs/common';

import { events } from '../../demo-database/resources(all are tables)/events-data';

@Injectable()
export class EventsService {
    getEvents() {
        return events;
    }
}
