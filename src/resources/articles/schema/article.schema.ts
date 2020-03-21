import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    accountId: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    details: {
        autuorId: String,
        desc: String,
        media: {
            type: [{
                heading: String,
                link: String
            }]
        },
        attachments: {
            type: [{
                heading: {
                    type: String,
                    required: true
                }, 
                body: {
                    type: String,
                    required: true
                } 
            }]
        }
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    stats: {
        type: {
            views: {
                type: Number,
                required: true,
                default: 0,
            },
            likes: {
                type: Number,
                required: true,
                default: 0,
            },
            shared: {
                type: Number,
                required: true,
                default: 0,
            }
        },
        required: true,
        default: {
            views: 0,
            likes: 0,
            shared: 0
        }
    },
    commentsData: {
        type: {
            totalCmts: {
                type: Number,
                required: true,
                default: 0,
            },
            comments: {
                type: [String],
                required: true,
                default: []
            }
        },
        required: true,
        default: {
            totalCmts: 0,
            comments: []
        }
    },
    messagesData: {
        type: {
            totalMsgs: {
                type: Number,
                required: true,
                default: 0,
            },
            messages: {
                type: [String],
                required: true,
                default: []
            }
        },
        required: true,
        default: {
            totalCmts: 0,
            messages: []
        }
    }
});
