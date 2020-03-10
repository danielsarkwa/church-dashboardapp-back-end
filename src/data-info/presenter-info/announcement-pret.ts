import { Message, Comment } from './indent-pret';

export class Announcement {
    announcementId: string;
    title: string;
    tags: string[];
    desc: string;
    coverImg: string;
    autuor: { _id: string, name: string, avatarUrl: string };
    from: string;
    to: string;
}

export class AnnouncementDetails {
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
