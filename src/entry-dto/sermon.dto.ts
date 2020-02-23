
export class CreateSermonDto {
    title: string;
    folder: string;
    details: {
      bibleTxts: string[],
      desc: string,
      speaker: string,
      points: {points: string, txt: string}[],
      attachments?: any[]
    };
    dateCreated?: string;
}
