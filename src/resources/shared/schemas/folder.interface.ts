import { Document } from 'mongoose';

export interface Folder extends Document {
    title: string;
    coverImg: string;
    belongsTo: string;
    totalTime?: number;
    numberOfFiles: number;
    files: string[]; // get the id of the file
    readonly createdAt: string;
}
