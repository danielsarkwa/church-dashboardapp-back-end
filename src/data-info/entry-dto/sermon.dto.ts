
export class CreateSermonDto {
    readonly title?: string;
    readonly folderId?: string;
    readonly audioUrl?: string;
    readonly duration: number;
    readonly details?: {
      bibleTxts?: { 
        txt: string, 
        scripture: string  
      }[],
      desc: string,
      speaker: string,
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
