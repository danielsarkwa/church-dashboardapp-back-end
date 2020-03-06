import { Message, Comment, RelatedItem } from './indent-pret';

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
    commentsData: { // query only 15 and rest is loaded as more
        totalCmts: number,
        comments?: Comment[]
    };
    messagesData: { // query only 12 and rest is loaded as more
        totalMsg: number,
        messages?: Message[]
    };
    relatedArticles: RelatedItem[]
}
