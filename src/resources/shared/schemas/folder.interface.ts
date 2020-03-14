import { Document } from 'mongoose';

export interface Folder extends Document {
    readonly title: string;
    readonly coverImg: string;
    readonly belongsTo: string;
    readonly totalTime?: number;
    readonly numberOfFiles: number;
    readonly files: string[];
    readonly createdAt: string;
}
