import { Document } from 'mongoose';

export interface DhbNotification extends Document {
    readonly userId: string;
    readonly action: string;
    readonly title: string;
    readonly group: string;
    viewers: string[];
    createdAt: Date;
}