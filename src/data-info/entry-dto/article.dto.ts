
export class CreateArticleDto {
    title: string;
    folderId: string;
    desc: string;
    content: string;
    autuor: { _id: string, name: string, avatarUrl: string };
    media: { heading: string, link: string }[];
    attachments?: { heading: string, body: string }[];
}
