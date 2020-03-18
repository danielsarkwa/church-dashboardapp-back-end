import * as mongoose from 'mongoose';

export const FolderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: true
    },
    belongsTo: {
        type: String,
        required: true
    },
    totalTime: {
        type: Number,
        required: true,
        default: 0
    },
    numberOfFiles: { 
        type: Number, 
        required: true,
        default: 0
    },
    files: [String],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
});

export const FolderOthersSchema = new mongoose.Schema({ // this will be for channels and accounts
    title: String,
    coverImg: String,
    belongsTo: String,
    numberOfFiles: { 
        type: Number, 
        required: true, 
        default: 0
    },
    files: [String],
    createdAt: { 
        type: Date,
        required: true,
        default: Date.now
    },
});
