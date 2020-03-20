import { Document } from 'mongoose';

export interface Folder extends Document {
    title: string;
    coverImg: string;
    desc: string;
    belongsTo: string;
    totalTime?: number;
    numberOfFiles: number;
    files: string[];
    readonly createdAt: string;
}
