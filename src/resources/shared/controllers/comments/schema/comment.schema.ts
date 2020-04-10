import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    cmtType: String,
    cmtTypeId: String,
    commentContent: String,
    commentAutour: String,
    stats: {
        type: {
            likes: Number,
            dislikes: Number,
        }
    },
    commentReply: {
        type: {
            totalReplies: Number,
            replies: {
                type: [{
                    commentAutour: String,
                    commentContent: String,
                    createAt: String
                }]
            }
        }
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});
