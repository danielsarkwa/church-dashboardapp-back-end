import { Document } from 'mongoose';

// faq
export interface Faq extends Document {
    title: string;
    desc: string;
    content: string;
    media: { 
        heading: string, 
        link: string 
    }[];
    createdAt: Date;
    response: {
        helpful: number,
        notHelpful: number
    };
    type: string;
}
