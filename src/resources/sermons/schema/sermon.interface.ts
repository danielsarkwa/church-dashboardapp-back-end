import { Document } from 'mongoose';

export interface Sermon extends Document {
    title: string;
    seriesId: string;
    audioUrl: string;
    coverImg: string;
    duration: number;
    details: {
        bibleTxts?: { 
            text: string, 
            scripture: string 
        }[],
        speaker: string,
        desc: string,
        points?: { 
            heading: string, 
            body: string 
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
