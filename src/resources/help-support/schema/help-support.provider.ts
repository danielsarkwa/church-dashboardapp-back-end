import { Connection } from 'mongoose';

import { HelpSupportSchema } from './help-support.schema';

export const helpSupportsProvider = {
    provide: 'HELP_SUPPORT_MODEL',
    useFactory: (connection: Connection) => connection.model('HelpSupport', HelpSupportSchema),
    inject: ['DATABASE_CONNECTION'],
};
