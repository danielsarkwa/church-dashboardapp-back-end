export class User {
    userId: string;
    userName: string;
    fullName: string;
    avatarUrl: string;
    email: string;
    groups?: { // the begining of the application, all users will be subscribed to every group
        _groupId: string,
        title: string,
        coverImg: string,
    }[] // these are the podcast groups and other aricle groups they are in
}

export class UserDetails {
    userId: string;
    userName: string;
    avatarUrl: string;
    personalInfo: {
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
    groups?: {
        _groupId: string,
        title: string,
        coverImg: string,
    }[]
}