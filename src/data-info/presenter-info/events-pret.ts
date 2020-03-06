import { Message, Comment } from './indent-pret';

export class Event {
    eventId: string;
    title: string;
    date: string;
    time: string;
    desc: string;
    tags: string[];
    coverImg: string;
    autuor: { 
        _id: string, 
        name: string,
        avatarUrl: string 
    };
}

export class EventDetails {
    eventId: string;
    title: string;
    date: string;
    time: string;
    desc: string;
    tags: string[];
    content: string;
    coverImg: string;
    details: {
        autuor: { _id: string, name: string, avatarUrl: string },
        more?: { heading: string, body: string }[]; // guest // mc // host // activities
        media: {heading: string, link: string}[];
        reminders: { date: string, time: string }[]; // this is set to 2hrs - 3hrs before the time
        attachments?: {heading: string, body: string}[];
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
}
