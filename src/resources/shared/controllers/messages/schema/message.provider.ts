import { Connection } from 'mongoose';

import { MessageSchema } from './message.schema';

export const messagesProvider = {
    provide: 'MESSAGE_MODEL',
    useFactory: (connection: Connection) => connection.model('Messages', MessageSchema),
    inject: ['DATABASE_CONNECTION'],
};