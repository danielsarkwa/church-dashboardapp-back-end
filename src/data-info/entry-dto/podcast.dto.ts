
export class CreatePodcastDto {
    title: string;
    folder: string;
    audioUrl: string;
    details: {
      bibleTxts?: {text: string, body}[],
      desc: string,
      speakers: {
        hosts: string[],
        guest?: string[],
      },
      points?: { heading: string, body: string }[],
      attachments?: {heading: string, body: string}[]
    };
}