
export class Feed {
    feedId: string;
    title: string;
    coverImg: string; // this is set by the front-end
    details: {
        autuor: { _id: string, name: string, avatarUrl: string },
        desc: string,
        to: string, // default to everyone by front-end and can't be empty
        content: string,
        media: { heading: string, link: string }[]; // videos and images links
        attachments?: { heading: string, body: string }[],
    };
    createdAt: string;
    stats: {
        views: number,
        likes: number,
        shares: number
        downloads: number
    };
    commentsData: { 
        totalCmts: number,
        comments?: { // query only 10 and rest is loaded as more
            user: {
                _id: string,
                name: string,
                avatarUrl: string
            },
            comentMsg: string,
            createdAt: string,
            cmtLikes?: number
            }[]
    };
    messagesData: { // query only 10 and rest is loaded as more
        totalMsg: number,
        messages: {
            user: {
                _id: string,
                name: string,
                avatarUrl: string
            },
            message: string;
            msgDetails: {
                _id: string,
                createdAt: string,
                attachments?: string[]
            }
        }[]
    }; 
};
