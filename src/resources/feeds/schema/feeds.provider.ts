import { Connection } from 'mongoose';

import { FeedsSchema } from './feeds.schema';

export const feedsProvider = {
    provide: 'FEEDS_MODEL',
    useFactory: (connection: Connection) => connection.model('Feed', FeedsSchema),
    inject: ['DATABASE_CONNECTION'],
};
