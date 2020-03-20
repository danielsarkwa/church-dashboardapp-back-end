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
    desc: {
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
    title: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    belongsTo: {
        type: String,
        required: true
    },
    numberOfFiles: { 
        type: Number, 
        required: true, 
        default: 0
    },
    files: [String],
    stats: {
        type: {
            views: {
                type: Number,
                required: true
            },
            likes: {
                type: Number,
                required: true
            }
        },
        required: true,
        default: {
            views: 0,
            likes: 0
        }
    },
    createdAt: { 
        type: Date,
        required: true,
        default: Date.now
    },
});
