
export class CreateAnnouncementDto {
    title: string;
    desc: string;
    tags: string[];
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
}