
export class Podcast {
    podcastId: string;
    title: string;
    folder: string;
    audioUrl: string;
    coverImg: string;
    podcastGroup: string;
    details: {
        speakers: {
            hosts: string[],
            guest?: string[],
        },
        bibleTxts?: {text: string, scripture: string}[],
        desc: string,
        points?: { heading: string, body: string }[],
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
    relatedPodcasts: { // query only 5-6 and rest is loaded as more
        podcastId: string,
        title: string,
        folder: string,
        coverImg: string
    }[];
};
