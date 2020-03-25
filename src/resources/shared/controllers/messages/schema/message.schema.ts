import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    msgType: String,
    msgTypeId: String,
    messageSubject: String,
    messageContent: String,
    messageAutour: String,
    createdAt: Date
});
