import { Folder, FolderDetail } from '../../data-info/presenter-info/folder-pret';

import { podcastFolderItems } from '../resources(all are tables)/podcasts-data';

export const podcastFolders: Folder[] = [ // these folders are channels or groups // therefore the items will be spliced from up to ten at a time
    {
        folderId: 'dsjso89xz9c87z',
        title: 'Podcast channel name 1',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'sermon',
        numberOfFiles: 0,
        files: [ // these are podcasts list
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
        title: 'Podcast channel name 2',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'sermon',
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
        title: 'Podcast channel name 3',
        coverImg: 'https:thisthilink.com',
        belongsTo: 'sermon',
        numberOfFiles: 0,
        files: [
            'sdadsadfcve5',
            'dfdsvdxxd',
            'shc9xujaaac',
            'dcas9yuidas'
        ],
        createdAt: 'Created data'
    }
];




export const folderDetails: FolderDetail = { // this is channel's or group's details
    folderId: 'dsjso89xz9c87z',
    title: 'Podcast channel name 1',
    coverImg: 'https:thisthilink.com',
    belongsTo: 'sermon',
    numberOfFiles: 0,
    files: podcastFolderItems,
    createdAt: 'Created data'
};
