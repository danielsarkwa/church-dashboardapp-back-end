
export class CreateAnnouncementDto {
    readonly title?: string;
    readonly desc?: string;
    readonly tags?: string[];
    readonly coverImg?: string;
    readonly details?: {
        autuorId: string,
        from: string,
        to: string,
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