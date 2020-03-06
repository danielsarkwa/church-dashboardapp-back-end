import { Message, Comment } from './indent-pret';

export class Feed {
    feedId: string;
    title: string;
    coverImg: string; // this is set by the front-end
    autuor: { 
        _id: string, 
        name: string, 
        avatarUrl: string 
    };
    desc: string;
    to: string; // default to everyone by front-end and can't be empty
    stats: {
        views: number,
        likes: number,
        shares: number
        downloads: number
    };
}

export class FeedDetails {
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
    commentsData: { // query only 15 and rest is loaded as more
        totalCmts: number,
        comments?: Comment[]
    };
    messagesData: { // query only 12 and rest is loaded as more
        totalMsg: number,
        messages?: Message[]
    };
};
