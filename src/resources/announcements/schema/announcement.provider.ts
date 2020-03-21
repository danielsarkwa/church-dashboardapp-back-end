import { Connection } from 'mongoose';

import { AnnouncementSchema } from './announcement.schema';

export const AnnouncementProvider = {
    provide: 'ANNOUNCEMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('Announcement', AnnouncementSchema),
    inject: ['DATABASE_CONNECTION'],
};
