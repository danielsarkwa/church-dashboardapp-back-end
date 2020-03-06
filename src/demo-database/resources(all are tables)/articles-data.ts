import { ArticleDetails } from '../../data-info/presenter-info/article-pret';

import { FolderItemList } from 'src/data-info/presenter-info/folder-pret';

export const articlesFolderItems: FolderItemList[] = [
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
    }
];


export const articleDetails: ArticleDetails = {
    articleId: 'sdfdsd6a8d',
    title: 'Learning the Bible',
    folderId: 'Folder Name',
    coverImg: 'https://thisisalinkto the cover image',
    content: 'this is a content of the article',
    details: {
        autuor: {
            _id: '454trdfs',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://thisisalinktotheavatar.image'
        },
        desc: 'This is a nice description',
        media: [
            { 
                heading: 'this is a heading', 
                link: 'this is the media link' 
            }
        ],
        attachments: [
            { 
                heading: 'this is a heading', 
                body: 'this is the attachments link' 
            }
        ],
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
                commentType: 'comment'
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
    relatedArticles: [
        {
            _id: 'sddfgdg',
            title: 'this is love',
            folderId: '878999asdad',
            coverImg: 'https://this.com'
        },
        {
            _id: 'sddfgdg',
            title: 'this is love',
            folderId: '878999asdad',
            coverImg: 'https://this.com'
        },
        {
            _id: 'sddfgdg',
            title: 'this is love',
            folderId: '878999asdad',
            coverImg: 'https://this.com'
        },
        {
            _id: 'sddfgdg',
            title: 'this is love',
            folderId: '878999asdad',
            coverImg: 'https://this.com'
        },
    ]
};
