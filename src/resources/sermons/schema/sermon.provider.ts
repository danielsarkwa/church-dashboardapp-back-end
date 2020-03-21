import { Connection } from 'mongoose';

import { SermonSchema } from './sermon.schema';

export const sermonsProvider = {
    provide: 'SERMON_MODEL',
    useFactory: (connection: Connection) => connection.model('Sermon', SermonSchema),
    inject: ['DATABASE_CONNECTION'],
};
