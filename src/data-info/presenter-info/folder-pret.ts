export class Folder {
    folderId: string;
    title: string;
    coverImg?: string; 
    belongsTo: string;
    numberOfFiles: number;
    totalTime?: number; // only when it is a sermon
    files: string[]; // this will be the id of the resources
    createdAt: string;
};

export class FolderItemList {
    _id: string;
    title: string;
    folderId: string;
    coverImg: string;
    stats: {
        views: number,
        likes: number,
        shares: number,
        comments: number,
        messages: number
    };
}

export class FolderDetail { // this only build the data with the list items
    folderId: string;
    title: string;
    coverImg?: string; 
    belongsTo: string;
    numberOfFiles: number;
    totalTime?: number;
    files: FolderItemList[];
    createdAt: string;
}
