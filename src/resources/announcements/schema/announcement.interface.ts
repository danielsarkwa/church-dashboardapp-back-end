import { Document } from 'mongoose';

export interface Announcement extends Document {
    title: string;
    tags?: string[];
    desc?: string;
    coverImg: string;
    details: {
        autuorId: string,
        from: string,
        to: string,
        content: string,
        media?: { 
            heading: string, 
            link: string 
        }[],
        reminders: { 
            date: string, 
            time: string 
        }[],
        attachments?: { 
            heading: string, 
            body: string 
        }[]
    };
    readonly createdAt: Date;
    readonly stats: {
        views: number,
        likes: number
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
