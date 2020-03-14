import { Document } from 'mongoose';

export interface Sermon extends Document {
    readonly sermonId?: string;
    readonly title: string;
    readonly folderId: string;
    readonly audioUrl: string;
    readonly coverImg: string;
    readonly details: {
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
    readonly commentsData: {
            totalCmts: number,
            comments?: {
                commentId: string;
                commentMsg: string;
                autuor: {
                    _id: string,
                    name: string,
                    avatarUrl: string
                };
                createdAt: string;
                cmtLikes: number;
                commentType: 'comment' | 'reply';
                replys?: {
                    replyId: string,
                    replyMsg: string,
                    autuor: {
                        _id: string,
                        name: string,
                        avatarUrl: string
                    },
                    createdAt: string,
                    replyLikes: number   
                }[]
            }[]
        };
    readonly messagesData: {
            totalMsg: number,
            messages?: {
                messageId: string;
                autuor: {
                    _id: string,
                    name: string,
                    avatarUrl: string
                };
                messageContent: string;
                createdAt: string;
                attachments?: string[]
            }[]
        };
    readonly relatedSermons: {
            _id: string;
            title: string;
            folderId: string;
            coverImg: string;
        }[]
};
