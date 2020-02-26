
export class CreateSermonDto {
    title: string;
    folderId: string;
    audioUrl: string;
    details: {
      bibleTxts?: { text: string, body }[],
      desc: string,
      speaker: string,
      points?: {heading: string, body: string}[],
      attachments?: {heading: string, body: string}[];
    };
}
