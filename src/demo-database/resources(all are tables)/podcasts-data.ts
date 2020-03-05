// @TODO -- add the podcast list data and the podcast details data

import { Podcast } from '../../data-info/presenter-info/podcasts-pret';

export const podcasts: Podcast[] = [
    {
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
            totalCmts: 10,
            comments: [
                {
                    user: {
                        _id: '45454hjgj4j54',
                        name: 'Daniel Yeboah',
                        avatarUrl: 'https://thisaurltotheprofilepic.com.ex'
                    },
                    comentMsg: 'this is an amazing comment',
                    createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                    cmtLikes: 5
                }
            ]
        },
        messagesData: {
            totalMsg: 15,
            messages: [
                {
                  user: {
                      _id: '34343fgfddfd',
                      name: 'Daniel Yeboah',
                      avatarUrl: 'https://thisisanimageurl.com'
                  },
                  message: 'this is the message and it is for Pastor',
                  msgDetails: {
                      _id: '4545ne4mb45',
                      createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                      attachments: ['link to some s3 buckets', 'another link to some s3 buckets']
                  }
                }
            ]
        },
        relatedPodcasts: [
            {
                podcastId: 'sdhbkhdgs78',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
            {
                podcastId: 'hksad78ssd',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
            {
                podcastId: 'jhioasd987a8ds',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
        ]
    },
    {
        podcastId: 'dsdfdsa7689sds',
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
            totalCmts: 10,
            comments: [
                {
                    user: {
                        _id: '45454hjgj4j54',
                        name: 'Daniel Yeboah',
                        avatarUrl: 'https://thisaurltotheprofilepic.com.ex'
                    },
                    comentMsg: 'this is an amazing comment',
                    createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                    cmtLikes: 5
                }
            ]
        },
        messagesData: {
            totalMsg: 15,
            messages: [
                {
                  user: {
                      _id: '34343fgfddfd',
                      name: 'Daniel Yeboah',
                      avatarUrl: 'https://thisisanimageurl.com'
                  },
                  message: 'this is the message and it is for Pastor',
                  msgDetails: {
                      _id: '4545ne4mb45',
                      createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                      attachments: ['link to some s3 buckets', 'another link to some s3 buckets']
                  }
                }
            ]
        },
        relatedPodcasts: [
            {
                podcastId: 'sdhbkhdgs78',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
            {
                podcastId: 'hksad78ssd',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
            {
                podcastId: 'jhioasd987a8ds',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
        ]
    },
    {
        podcastId: 'dsdfdsa7689sds',
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
            totalCmts: 10,
            comments: [
                {
                    user: {
                        _id: '45454hjgj4j54',
                        name: 'Daniel Yeboah',
                        avatarUrl: 'https://thisaurltotheprofilepic.com.ex'
                    },
                    comentMsg: 'this is an amazing comment',
                    createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                    cmtLikes: 5
                }
            ]
        },
        messagesData: {
            totalMsg: 15,
            messages: [
                {
                  user: {
                      _id: '34343fgfddfd',
                      name: 'Daniel Yeboah',
                      avatarUrl: 'https://thisisanimageurl.com'
                  },
                  message: 'this is the message and it is for Pastor',
                  msgDetails: {
                      _id: '4545ne4mb45',
                      createdAt: 'Tue Feb 25 2020 17:22:25 GMT+0000 (Greenwich Mean Time)',
                      attachments: ['link to some s3 buckets', 'another link to some s3 buckets']
                  }
                }
            ]
        },
        relatedPodcasts: [
            {
                podcastId: 'sdhbkhdgs78',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
            {
                podcastId: 'hksad78ssd',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
            {
                podcastId: 'jhioasd987a8ds',
                title: 'love over mercy',
                folderId: 'Agape love',
                coverImg: 'https://thisisalsoanotherlinktothe.com'
            },
        ]
    }
];
