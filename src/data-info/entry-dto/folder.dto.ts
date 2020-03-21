
export class CreateFolder {
    readonly title?: string;
    readonly coverImg?: string;
    readonly desc: string;
    readonly belongsTo?: string; // this is the tag for the folder (channel, series, user account)
};
