
export class CreateFeedsDto {
    title: string;
    desc: string;
    details: {
      attachment?: any[],
      media: any[]
    }
    dateCreated: string;    
}
