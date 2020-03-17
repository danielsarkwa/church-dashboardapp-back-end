import * as mongoose from 'mongoose';

export const SermonSchema = new mongoose.Schema({
    title: String,
    folderId: String,
    audioUrl: String,
    coverImg: {
        type: String,
        required: true
    },
    duration: Number,
    details: {
        bibleTxts: {
            type: {
                text: {
                    type: String,
                    required: true
                }, 
                scripture: {
                    type: String,
                    required: true
                }
            }
        },
        speaker: String,
        desc: String,
        points: {
            type: {
                heading: {
                    type: String,
                    required: true
                }, 
                body: {
                    type: String,
                    required: true
                } 
            }
        },
        attachments: {
            type: {
                heading: {
                    type: String,
                    required: true
                }, 
                body: {
                    type: String,
                    required: true
                } 
            }
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
                default: [] // this will be the links of all comments set by the mobile app
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
                default: [] // this will be the links of all messages set by the mobile app
            }
        },
        required: true,
        default: {
            totalCmts: 0,
            messages: []
        }
    }
});
