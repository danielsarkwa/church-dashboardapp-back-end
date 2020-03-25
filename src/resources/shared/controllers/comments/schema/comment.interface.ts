import { Document } from 'mongoose';

export interface Comment extends Document {
    readonly cmtType: string;
    readonly cmtTypeId: string;
    readonly commentContent: string;
    readonly commentAutour: string;
    readonly stats: {
            likes: number,
            dislikes: number
        };
    readonly commentReply: {
            totalReplies: number,
            replies: {
                commentAutour: string,
                commentContent: string,
                createAt: Date
            }[]
        };
    readonly createdAt: Date;
}
