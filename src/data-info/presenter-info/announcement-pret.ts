
export class Announcement {
    announcementId: string;
    title: string;
    tags: string[];
    desc: string;
    coverImg: string;
    details: {
        autuor: { _id: string, name: string, avatarUrl: string },
        from: string,
        to: string,
        content: string,
        media?: { heading: string, link: string }[],
        reminders: { date: string, time: string }[],
        attachments?: { heading: string, body: string }[]
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
}
