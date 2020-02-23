
export class CreateEventDto {
    title: string;
    date: string;
    time: string;
    desc: string;
    details?: any; // guest // mc // host
    reminders?: { date: string, time: string }[];
    attachments?: any[];
    dateCreated?: string;
}
