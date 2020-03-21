import { Connection } from 'mongoose';

import { EventSchema } from './event.schema';

export const EventProvider = {
    provide: 'EVENT_MODEL',
    useFactory: (connection: Connection) => connection.model('Event', EventSchema),
    inject: ['DATABASE_CONNECTION'],
};
