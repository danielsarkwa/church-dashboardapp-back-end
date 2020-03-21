import { Document } from 'mongoose';

export interface Folder extends Document {
    title: string;
    coverImg: string;
    desc: string;
    belongsTo: string;
    totalTime?: number;
    numberOfFiles: number;
    files: string[];
    stats: {
        views: number,
        likes: number
    };
    readonly createdAt: Date;
}
