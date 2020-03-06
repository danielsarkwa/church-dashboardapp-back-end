import { PodcastDetails } from '../../data-info/presenter-info/podcasts-pret';

import { FolderItemList } from '../../data-info/presenter-info/folder-pret';

export const podcastFolderItems: FolderItemList[] = [ // these are items for a particluar folder in the sermon
    {
        _id: '1212hj343dfd',
        title: 'Love of God',
        folderId: 'dfpsidf0si3',
        coverImg: 'https://thisisalinktothecoverimage.com',
        stats: {
            views: 17,
            likes: 12,
            shares: 15,
            downloads: 9,
            comments: 23,
            messages: 45
        }
    },
    {
        _id: '1212hj343dfd',
        title: 'Love of God',
        folderId: 'dfpsidf0si3',
        coverImg: 'https://thisisalinktothecoverimage.com',
        stats: {
            views: 17,
            likes: 12,
            shares: 15,
            downloads: 9,
            comments: 23,
            messages: 45
        }
    },
    {
        _id: '1212hj343dfd',
        title: 'Love of God',
        folderId: 'dfpsidf0si3',
        coverImg: 'https://thisisalinktothecoverimage.com',
        stats: {
            views: 17,
            likes: 12,
            shares: 15,
            downloads: 9,
            comments: 23,
            messages: 45
        }
    },
];

export const podcastDetails: PodcastDetails = {
    podcastId: 'asdafsasdsfea',
    title: 'Marriage',
    folderId: 'Agapa Love',
    audioUrl: 'https//:thisisalink.com.ex',
    coverImg: 'https://thisisalinkto the cover image',
    podcastGroup: 'The XY Group',
    details: {
        speakers: {
            hosts: ['Mr.Daniel'],
            guest: ['Mr.Daniel Agyeman', 'Mrs.Diana Agyeman'],
        },
        bibleTxts: [
            {
                text: 'Jhon 3:16', 
                scripture: 'this is the holy scriptures'
            },
            {
                text: 'Jhon 3:16', 
                scripture: 'this is the holy scriptures'
            },
            {
                text: 'Jhon 3:16', 
                scripture: 'this is the holy scriptures'
            }
        ],
        desc: 'this is  cool description',
        points: [
            {
                heading: 'God love you most', 
                body: 'this is the body of the point'
            },
            {
                heading: 'God love you most', 
                body: 'this is the body of the point'
            },
            {
                heading: 'God love you most', 
                body: 'this is the body of the point'
            }
        ],
        attachments: [
            {
                heading: 'simple pdf',
                body: 'https://www.thisisalinktodownloadit.com'
            }
        ]
    },
    createdAt: 'Mon Feb 24 2020 00:35:07 GMT+0000 (Greenwich Mean Time)',
    stats: {
        views: 17,
        likes: 12,
        shares: 15,
        downloads: 9
    },
    commentsData: {
        totalCmts: 3,
        comments: [
            {
                commentId: '8934cvuitgs',
                commentMsg: 'this is an amazing comment',
                autuor: {
                    _id: 'rwuef9u',
                    name: 'Daniel Yeboah',
                    avatarUrl: 'https://thisaurltotheprofilepic.com.ex'
                },
                createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                cmtLikes: 5,
                commentType: 'comment',
                replys: [
                    {
                        replyId: 'u9wfbdsa',
                        replyMsg: 'this is cool',
                        autuor: {
                            _id: 'sufish',
                            name: 'Lily Anoao',
                            avatarUrl: 'https://thi.com'
                        },
                        createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                        replyLikes: 20
                    },
                    {
                        replyId: 'uifsdf',
                        replyMsg: 'this is not cool at all',
                        autuor: {
                            _id: 'oufdsk',
                            name: 'Gnah Anoao',
                            avatarUrl: 'https://thi.com'
                        },
                        createdAt: 'Fri Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                        replyLikes: 10
                    }
                ]
            }
        ]
    },
    messagesData: {
        totalMsg: 15,
        messages: [
            {
                messageId: '4545ne4mb45',
                autuor: {
                    _id: '34343fgfddfd',
                    name: 'Lane Lich',
                    avatarUrl: 'https://thisisanimageurl.com'
                },
                messageContent: 'this is the message and it is for Pastor',
                createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                attachments: ['link to some s3 buckets', 'another link to some s3 buckets']
            }
        ]
    },
    relatedPodcasts: [
        {
            _id: 'sdhbkhdgs78',
            title: 'love over mercy',
            folderId: 'Agape love',
            coverImg: 'https://thisisalsoanotherlinktothe.com'
        },
        {
            _id: 'hksad78ssd',
            title: 'love over mercy',
            folderId: 'Agape love',
            coverImg: 'https://thisisalsoanotherlinktothe.com'
        },
        {
            _id: 'jhioasd987a8ds',
            title: 'love over mercy',
            folderId: 'Agape love',
            coverImg: 'https://thisisalsoanotherlinktothe.com'
        },
    ]
};