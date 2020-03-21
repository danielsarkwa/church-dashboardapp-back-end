import { Document } from 'mongoose';

export interface Podcast extends Document {
    title: string;
    channelId: string;
    audioUrl: string;
    coverImg: string;
    duration: number;
    details: {
        speakers: {
            hosts: string[],
            guests?: string[],
        },
        desc?: string,
        attachments?: { 
            heading: string, 
            body: string 
        }[]
    };
    readonly createdAt: string;
    readonly stats: {
            views: number,
            likes: number,
            shares: number,
            downloads: number
        };
    commentsData: {
            totalCmts: number,
            comments: string[]
        };
    messagesData: {
            totalMsg: number,
            messages: string[]
        };
};
