
export class CreateEventDto {
    title?: string;
    coverImg?: string;
    viewColor: string;
    date?: string;
    time?: string;
    desc?: string;
    tags?: string[];
    details?: {
        autuorId: string,
        content: string,
        media?: {
            heading: string, 
            link: string
        }[],
        reminders: { 
            date: string, 
            time: string 
        }[],
        attachments?: {
            heading: string, 
            body: string
        }[]
    };
}
