import * as mongoose from 'mongoose';

export const SermonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    seriesId: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    details: {
        bibleTxts: {
            type: [{
                text: {
                    type: String,
                    required: true
                }, 
                scripture: {
                    type: String,
                    required: true
                }
            }]
        },
        speaker: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        points: {
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
        },
        attachments: { // deprecated
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
    stats: { // removed as a single document
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
            },
            downloads: {
                type: Number,
                required: true,
                default: 0,
            }
        },
        required: true,
        default: {
            views: 0,
            likes: 0,
            shared: 0,
            downloads: 0
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
            totalMsgs: 0,
            messages: []
        }
    }
});
