import { Folder, FolderDetail } from '../../data-info/presenter-info/folder-pret';

export const podcastFolders: Folder[] = [ // this folders are channels or groups
    {
        folderId: 'dsjso89xz9c87z',
        title: 'Agape Love',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'sermon',
        numberOfFiles: 0,
        totalTime: 3000,
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
        title: 'Agape Love',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'sermon',
        numberOfFiles: 0,
        totalTime: 3000,
        files: [
            'sdadsadfcve5',
            'dfdsvdxxd',
            'shc9xujaaac',
            'dcas9yuidas'
        ],
        createdAt: 'Created data'
    }
];




export const podcastDetails: FolderDetail = { // this is channel's or group's shows
    folderId: 'dsjso89xz9c87z',
    title: 'Agape Love',
    coverImg: 'https:thisthilink.com',
    belongsTo: 'sermon',
    numberOfFiles: 0,
    totalTime: 3000,
    files: [
        {
            id: 'sdadsadfcve5',
            title: 'Love of God',
            audioUrl: 'https://thisisalink.com.ex',
            coverImg: 'https://thisisalinktothecoverimage.com',
            personel: 'Pas.Emmanuel',
            createdAt: 'Mon Feb 24 2020 00:35:07 GMT+0000 (Greenwich Mean Time)',
            totalCmts: 10,
            stats: {
                views: 17,
                likes: 12
            }
        },
        {
            id: 'adsadajnc',
            title: 'Love of God',
            audioUrl: 'https://thisisalink.com.ex',
            coverImg: 'https://thisisalinktothecoverimage.com',
            personel: 'Pas.Emmanuel',
            createdAt: 'Mon Feb 24 2020 00:35:07 GMT+0000 (Greenwich Mean Time)',
            totalCmts: 10,
            stats: {
                views: 17,
                likes: 12
            }
        },
        {
            id: '7890909sd0jhk',
            title: 'Love of God',
            audioUrl: 'https://thisisalink.com.ex',
            coverImg: 'https://thisisalinktothecoverimage.com',
            personel: 'Pas.Emmanuel',
            createdAt: 'Mon Feb 24 2020 00:35:07 GMT+0000 (Greenwich Mean Time)',
            totalCmts: 10,
            stats: {
                views: 17,
                likes: 12
            }
        },
        {
            id: 'sdsscxzakodsai9',
            title: 'Love of God',
            audioUrl: 'https://thisisalink.com.ex',
            coverImg: 'https://thisisalinktothecoverimage.com',
            personel: 'Pas.Emmanuel', // this is the host
            createdAt: 'Mon Feb 24 2020 00:35:07 GMT+0000 (Greenwich Mean Time)',
            totalCmts: 10,
            stats: {
                views: 17,
                likes: 12
            }
        },
    ],
    createdAt: 'Created data'
};
