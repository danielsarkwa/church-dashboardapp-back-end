
export class CreateFeedDto {
    title: string;
    coverImg: string; // this is set by the front-end
    details: {
        desc: string;
        to: string,
        content: string,
        autuor: { _id: string, name: string, avatarUrl: string },
        media: {heading: string, link: string}[], // videos and images links
        attachments?: {heading: string, body: string}[]
    }
}
