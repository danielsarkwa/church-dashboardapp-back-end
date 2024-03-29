import { Document } from 'mongoose';

export interface Event extends Document {
    title: string;
    coverImg: string;
    viewColor: string;
    date: {
        yr: string,
        mon: string,
        day: number
    };
    time: {
        start: string,
        end: string
    };
    desc: string;
    tags: string[];
    details: {
        autuorId: string,
        content: string,
        media: {
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
        }[],
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