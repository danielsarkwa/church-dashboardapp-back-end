import { Event, EventDetails } from '../../data-info/presenter-info/events-pret';

export const events: Event[] = [
    {
        eventId: 'sddy87sfdsf',
        title: 'Youth Meeting',
        time: 'this is the time',
        date: 'this is the date',
        desc: 'this is a description',
        tags: ['year planning', 'discussions'],
        coverImg: 'https://5thiisisacover.image',
        autuor: {
            _id: 'dfdfs7d8dd',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://5thiisisaprofile.image'
        }
    },
    {
        eventId: 'sddy87sfdsf',
        title: 'Youth Meeting',
        time: 'this is the time',
        date: 'this is the date',
        desc: 'this is a description',
        tags: ['year planning', 'discussions'],
        coverImg: 'https://5thiisisacover.image',
        autuor: {
            _id: 'dfdfs7d8dd',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://5thiisisaprofile.image'
        }
    },
    {
        eventId: 'sddy87sfdsf',
        title: 'Youth Meeting',
        time: 'this is the time',
        date: 'this is the date',
        desc: 'this is a description',
        tags: ['year planning', 'discussions'],
        coverImg: 'https://5thiisisacover.image',
        autuor: {
            _id: 'dfdfs7d8dd',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://5thiisisaprofile.image'
        }
    },
    {
        eventId: 'sddy87sfdsf',
        title: 'Youth Meeting',
        time: 'this is the time',
        date: 'this is the date',
        desc: 'this is a description',
        tags: ['year planning', 'discussions'],
        coverImg: 'https://5thiisisacover.image',
        autuor: {
            _id: 'dfdfs7d8dd',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://5thiisisaprofile.image'
        }
    },
    {
        eventId: 'sddy87sfdsf',
        title: 'Youth Meeting',
        time: 'this is the time',
        date: 'this is the date',
        desc: 'this is a description',
        tags: ['year planning', 'discussions'],
        coverImg: 'https://5thiisisacover.image',
        autuor: {
            _id: 'dfdfs7d8dd',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://5thiisisaprofile.image'
        }
    },
    {
        eventId: 'sddy87sfdsf',
        title: 'Youth Meeting',
        time: 'this is the time',
        date: 'this is the date',
        desc: 'this is a description',
        tags: ['year planning', 'discussions'],
        coverImg: 'https://5thiisisacover.image',
        autuor: {
            _id: 'dfdfs7d8dd',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://5thiisisaprofile.image'
        }
    },
];




export const eventsDetails: EventDetails = {
    eventId: 'sddy87sfdsf',
    title: 'Youth Meeting',
    time: 'this is the time',
    date: 'this is the date',
    desc: 'this is a description',
    tags: ['year planning', 'discussions'],
    content: 'this is the event content',
    coverImg: 'https://5thiisisacover.image',
    details: {
        autuor: {
            _id: 'dfdfs7d8dd',
            name: 'Daniel Yeboah',
            avatarUrl: 'https://5thiisisaprofile.image'
        },
        more: [
            {
                heading: 'host',
                body: 'mr.Daniel'
            },
            {
                heading: 'guest speaker',
                body: 'mr.Daniel'
            }
        ], // guest // mc // host // activities
        media: [
            {
                heading: 'this is heading',
                link: 'this is the link of the media'
            }
        ],
        reminders: [
            {
                date: 'Mon Feb 24 2020',
                time: '10:35:07 GMT+0000 (Greenwich Mean Time)'
            }
        ],
        attachments: [
            {
                heading: 'this is the heading',
                body: 'this is the attachment body'
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
};