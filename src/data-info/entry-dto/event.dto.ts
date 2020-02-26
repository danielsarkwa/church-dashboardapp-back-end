
export class CreateEventDto {
    title: string;
    date: string;
    time: string;
    desc: string;
    content: string;
    coverImg: string;
    details: {
        autuor: { _id: string, name: string, avatarUrl: string },
        more?: { heading: string, body: string }[]; // guest // mc // host // activities
        reminders: { date: string, time: string }[]; // this is set to 2hrs - 3hrs before the time
        attachments?: {heading: string, body: string}[];
        mediaUrls: {heading: string, link: string}[]; // videos and images links
    };
}
