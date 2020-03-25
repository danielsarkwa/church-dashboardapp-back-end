import { Connection } from 'mongoose';

import { CommentSchema } from './comment.schema';

export const commentsProvider = {
    provide: 'COMMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('Comments', CommentSchema),
    inject: ['DATABASE_CONNECTION'],
};
