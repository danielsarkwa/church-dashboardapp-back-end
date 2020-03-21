import * as mongoose from 'mongoose';

export const AnnouncementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: [String],
    desc: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: true
    },
    details: {
        autuorId: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        media: {
            type: [{
                heading: String,
                link: String
            }]
        },
        reminders: {
            type: [{
                date: String, 
                time: String,
            }],
            required: true
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
            }
        },
        required: true,
        default: {
            views: 0,
            likes: 0
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
            totalMsg: {
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
