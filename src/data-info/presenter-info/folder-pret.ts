
export class Folder {
    folderId: string;
    title: string;
    coverImg?: string; 
    belongsTo: string;
    numberOfFiles: number;
    totalTime?: number;
    files: string[]; // this will be the id of the resources
    createdAt: string;
};

export class FolderDetail {
    folderId: string;
    title: string;
    coverImg?: string; 
    belongsTo: string;
    numberOfFiles: number;
    totalTime?: number;
    files: {
        id: string,
        title: string,
        audioUrl: string,
        coverImg: string,
        personel: string,
        createdAt: string,
        totalCmts: number,
        stats: {
            views: number,
            likes: number
        }
    }[]; // this will be the id of the resources
    createdAt: string;

    // size: number; // will be set after the app has gotten access to the buck config
}
