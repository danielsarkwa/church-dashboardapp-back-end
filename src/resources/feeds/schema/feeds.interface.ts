import { Document } from 'mongoose';

export interface Feed extends Document {
    title: string;
    coverImg: string;
    details: {
        desc: string;
        to: string,
        content: string,
        autuorId: string,
        media: {
            heading: string, 
            link: string
        }[],
        attachments?: {
            heading: string,
            body: string
        }[]
    };
    createdAt: Date;
    stats: {
        views: number,
        likes: number,
        shared: number
    };
    commentsData: {
        totalCmts: number,
        comments?: string[]
    };
    messagesData: {
        totalMsgs: number,
        messages?: string[]
    };
}
