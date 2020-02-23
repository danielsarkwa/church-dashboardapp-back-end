
export class CreateAnnouncementDto {
    title: string;
    desc: string;
    from: string;
    to: string;
    reminders?: { date: string, time: string }[];
    attachments?: any[];
    dateCreated?: string;
}