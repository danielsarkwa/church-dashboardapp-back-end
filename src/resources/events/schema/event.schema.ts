import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: true
    },
    viewColor: {
        type: String,
        required: true
    },
    date: {
        type: {
            yr: String,
            mon:String,
            day: Number
        },
        required: true
    },
    time: {
        type: {
            start: String,
            end: String
        },
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tags: [String],
    details: {
        autuorId: {
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
                required: true
            },
            likes: {
                type: Number,
                required: true
            },
            shared: {
                type: Number,
                required: true
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
                required: true
            },
            comments: {
                type: [String],
                required: true
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
                required: true
            },
            messages: {
                type: [String],
                required: true
            }
        },
        required: true,
        default: {
            totalMsgs: 0,
            messages: []
        }
    }
});
