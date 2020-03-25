import { Document } from 'mongoose';

export interface Message extends Document {
    readonly msgType: string;
    readonly msgTypeId: string;
    readonly messageAutour: string;
    readonly messageSubject: string;
    readonly messageContent: string;
    readonly attachment: {
        heading: string, 
        body: string
    }[];
    readonly createdAt: Date;
}
