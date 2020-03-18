import { Folder, FolderDetail } from '../../data-info/presenter-info/folder-pret';

export const articleFolders: Folder[] = [ // these are articles by an entity --> autuor, channel, church or pastor
    {
        folderId: 'dsjso89xz9c87z',
        title: 'user 1',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'article',
        numberOfFiles: 0,
        files: [
            'sdadsadfcve5',
            'dfdsvdxxd',
            'shc9xujaaac',
            'dcas9yuidas'
        ],
        createdAt: 'Created data'
    },
    {
        folderId: 'rtryerds',
        title: 'user 2',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'article',
        numberOfFiles: 0,
        files: [
            'sdadsadfcve5',
            'dfdsvdxxd',
            'shc9xujaaac',
            'dcas9yuidas',
            'shc9xujaaac',
            'dcas9yuidas'
        ],
        createdAt: 'Created data'
    },
    {
        folderId: 'rtryerds',
        title: 'user 3',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'article',
        numberOfFiles: 0,
        files: [
            'sdadsadfcve5',
            'dfdsvdxxd',
            'shc9xujaaac',
            'dcas9yuidas'
        ],
        createdAt: 'Created data'
    },
];


export const articleFolderDetails: FolderDetail = { // this is the details of a single user who writes articles
    folderId: 'dsjso89xz9c87z',
    title: 'User 1',
    coverImg: 'https:thisthilink.com',
    belongsTo: 'sermon',
    numberOfFiles: 0,
    files: ['dnfsfdsf', 'fdhsibd'],
    createdAt: 'Created data'
};
