import * as mongoose from 'mongoose';

export const HelpSupportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    media: {
        type: [{
            heading: {
                type: String,
                required: true
            }, 
            link: {
                type: String,
                required: true
            }
        }]
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    response: {
        type: {
            helpful: Number,
            notHelpful: Number
        },
        default: {
            helpful: 0,
            notHelpful: 0
        }
    },
    type:  {
        type: String,
        required: true
    }
});