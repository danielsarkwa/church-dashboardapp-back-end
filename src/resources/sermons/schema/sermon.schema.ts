import * as mongoose from 'mongoose';

export const SermonSchema = new mongoose.Schema({
    title: String,
    folderId: String,
    audioUrl: String,
    coverImg: String,
    details: {
        bibleTxts: { 
            text: String, 
            scripture: String 
        },
        speaker: String,
        desc: String,
        points: { 
            heading: String, 
            body: String 
        },
        attachments: { 
            heading: String, 
            body: String 
        }
    },
    createdAt: String,
    stats: {
        views: Number,
        likes: Number,
        shares: Number,
        downloads: Number
    },
    commentsData: {
        totalCmts: Number,
        comments: String // this will be of comment later 
    },
    messagesData: {
        totalMsg: Number,
        messages: String // this will be of message later 
    },
    relatedSermons: String // this will be of type snap entity
});
