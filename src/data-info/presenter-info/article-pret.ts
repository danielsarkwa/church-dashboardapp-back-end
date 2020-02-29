
export class Article { // this is for the list of articles
    articleId: string;
    title: string;
    folderId: string;
    coverImg: string;
    autuor: { 
        _id: string, 
        name: string, 
        avatarUrl: string
    };
    desc: string;
    stats: {
        views: number,
        likes: number,
        shares: number
        downloads: number
    };
}

export class ArticleDetails { // this is the full detail of an article
    articleId: string;
    title: string;
    folderId: string;
    coverImg: string;
    content: string;
    details: {
        autuor: { _id: string, name: string, avatarUrl: string },
        desc: string,
        media?: { heading: string, link: string }[],
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
    relatedArticles: { // query only 5-6 and rest is loaded as more
        articleId: string,
        title: string,
        folder: string,
        coverImg: string
    }[];
}