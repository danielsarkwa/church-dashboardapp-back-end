
export class CreatePodcastDto {
    title: string;
    folder: string;
    details: {
      desc: string,
      guests: string[],
      points: { points: string, txt: string }[],
      attachments?: any[]
    };
    dateCreated?: string;
}