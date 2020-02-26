
export class Sermon {
    sermonId: string;
    title: string;
    folderId: string;
    audioUrl: string;
    coverImg: string;
    details: {
        bibleTxts?: { text: string, scripture: string }[],
        speaker: string,
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
    relatedSermons: { // query only 5-6 and rest is loaded as more
        sermonId: string,
        title: string,
        folderId: string,
        coverImg: string
    }[];
};

// repliesData: {
            //     totalRlys: number,
            //     replies: {
            //         user: {
            //             _id: string,
            //             name: string,
            //             avatarUrl: string
            //         },
            //         comentMsg: string,
            //         }[]
            //     }