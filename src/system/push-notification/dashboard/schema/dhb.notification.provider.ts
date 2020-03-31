import { Connection } from 'mongoose';

import { DhbNotificationSchema } from './dhb.notification.schema';

export const DhbNotificationProvider = {
    provide: 'ADMIN_NOTIFICATION_MODEL',
    useFactory: (connection: Connection) => connection.model('Dashboard Notification', DhbNotificationSchema),
    inject: ['DATABASE_CONNECTION'],
};
