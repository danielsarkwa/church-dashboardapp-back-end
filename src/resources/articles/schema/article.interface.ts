import { Document } from 'mongoose';

export interface Article extends Document {
    title: string;
    accountId: string;
    coverImg: string;
    content: string;
    details: {
        autuorId: string,
        desc?: string,
        media?: { 
            heading: string, 
            link: string 
        }[],
        attachments?: { 
            heading: string, 
            body: string 
        }[]
    };
    readonly createdAt: Date;
    readonly stats: {
            views: number,
            likes: number,
            shared: number
        };
    commentsData: {
        totalCmts: number,
        comments: string[]
    };
    messagesData: {
        totalMsgs: number,
        messages: string[]
    };
}
