import * as mongoose from 'mongoose';

export const DhbNotificationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    viewers: {
        type: [String],
        required: true,
        default: []
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});