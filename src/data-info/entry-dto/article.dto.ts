
export class CreateArticleDto {
    title: string;
    folder: string;
    desc: string;
    content: string;
    autuor: { _id: string, name: string, avatarUrl: string };
    media: { heading: string, link: string }[];
    attachments?: { heading: string, body: string }[];
}
