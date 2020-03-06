import { Message, Comment, RelatedItem } from './indent-pret';

export class PodcastDetails {
    podcastId: string;
    title: string;
    folderId: string;
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
    commentsData: { // query only 15 and rest is loaded as more
        totalCmts: number,
        comments?: Comment[]
    };
    messagesData: { // query only 12 and rest is loaded as more
        totalMsg: number,
        messages?: Message[]
    };
    relatedPodcasts: RelatedItem[]
};
