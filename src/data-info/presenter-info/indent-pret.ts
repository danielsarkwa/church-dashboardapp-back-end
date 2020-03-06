
export class Message {
    messageId: string;
    autuor: {
        _id: string,
        name: string,
        avatarUrl: string
    };
    messageContent: string;
    createdAt: string;
    attachments?: string[]
};

export class Comment {
    commentId: string;
    commentMsg: string;
    autuor: {
        _id: string,
        name: string,
        avatarUrl: string
    };
    createdAt: string;
    cmtLikes: number;
    commentType: 'comment' | 'reply';
    replys?: {
        replyId: string,
        replyMsg: string,
        autuor: {
            _id: string,
            name: string,
            avatarUrl: string
        },
        createdAt: string,
        replyLikes: number   
    }[]
};

export class RelatedItem {
    _id: string;
    title: string;
    folderId: string;
    coverImg: string;
};