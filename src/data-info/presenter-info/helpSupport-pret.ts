
// User feedback / report / issues
export class UserFeedback {
    feedbackId: string;
    autuor: {
        _id: string,
        name: string, 
        avatarUrl: string,
        email: string,
    };
    subject: string;
    tag: string[];
    content: string;
    createdAt: string;
    attachments?: any[];
};

// User feature suggests
export class SuggestedFeatures {
    suggestionId: string;
    autuor: {
        _id: string,
        name: string, 
        avatarUrl: string,
        email: string,
    };
    subject: string;
    content: string;
    createdAt: string;
    attachments?: any[];
    likes: number;
    commentsData?: { 
        totalCmts: number,
        comments?: { // query only 10 and rest is loaded as more
            user: {
                _id: string,
                name: string,
                avatarUrl: string
            },
            comentMsg: string,
            createdAt: string,
            cmtLikes?: number
            }[]
    };
};

// FAQs / usability articles
export class Faq {
    faqId: string;
    title: string;
    desc: string; // topic and will be an option on the front-end to choose from
    content: string;
    media: { heading: string, link: string }[];
    createdAt: string;
    feedback: {
        helpful: number,
        notHelpful: number
    };
    relatedFaqs: {
        faqId: string;
        title: string;
    }[]
}

// Terms & Conditions and Privacy Policy