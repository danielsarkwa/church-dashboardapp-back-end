
export class CreateFolder {
    readonly title?: string;
    readonly coverImg?: string;
    readonly belongsTo?: string;
    readonly files?: { //  for podcasts and sermons
        fileId: string, 
        duration: number
    }[];
};
