import { Connection } from 'mongoose';

import { PodcastSchema } from './podcast.schema';

export const podcastProvider = {
    provide: 'PODCAST_MODEL',
    useFactory: (connection: Connection) => connection.model('Podcast', PodcastSchema),
    inject: ['DATABASE_CONNECTION'],
};