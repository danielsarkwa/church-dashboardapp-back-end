
export class CreatePodcastDto {
    readonly title?: string;
    readonly channelId?: string;
    readonly audioUrl?: string;
    readonly details?: {
      bibleTxts?: { 
        txt: string, 
        scripture: string  
      }[],
      desc: string,
      speakers: {
        hosts: string[],
        guest?: string[],
      },
      points?: {
        heading: string, 
        body: string
      }[],
      attachments?: {
        heading: string, 
        body: string
      }[];
    };
}