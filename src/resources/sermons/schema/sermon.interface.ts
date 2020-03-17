import { Document } from 'mongoose';

export interface Sermon extends Document {
    title: string;
    folderId: string;
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
    readonly createdAt: string;
    readonly stats: {
            views: number,
            likes: number,
            shares: number,
            downloads: number
        };
    commentsData: {
            totalCmts: number,
            comments: string[] // data in here will be used to query the comments
        };
    messagesData: {
            totalMsg: number,
            messages: string[] // data in here will be used to query the messages
        };
};
