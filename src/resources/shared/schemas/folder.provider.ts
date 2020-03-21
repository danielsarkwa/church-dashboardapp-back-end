import { Connection } from 'mongoose';

import { FolderSchema } from './folder.schema';

export const foldersProvider = {
        provide: 'FOLDER_MODEL',
        useFactory: (connection: Connection) => connection.model('Folder', FolderSchema),
        inject: ['DATABASE_CONNECTION'],
};