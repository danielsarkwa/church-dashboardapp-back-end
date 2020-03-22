import { Document } from 'mongoose';

export interface User extends Document {
    readonly userName: string;
    readonly avatarUrl: string;
    readonly personalInfo: {
        fullName: string,
        email: string,
        phone: string,
        address: {
            country: string,
            state: string,
            city: string,
            town: string
        }
    };
    readonly groups: string[]; // this is channels(podcast and articles), communities of the user
    readonly password: string;
    type: 'user' | 'admin';
    role: string;
}