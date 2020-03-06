export class Admin {
    adminId: string;
    userName: string;
    avatarUrl: string;
    email: string;
    role: string[];
    groups: {
        _groupId: string,
        title: string,
        coverImg: string,
    }[] // these are the things the user is involved in -- like artilce accounts, podcast group
}

export class AdminDetails {
    adminId: string;
    userName: string;
    avatarUrl: string;
    email: string;
    personalInfo: {
        fullName: string,
        phone: string,
        address: {
            country: string,
            state: string,
            city: string,
            town: string
        }
    };
    role: string[];
    groups: {
        _groupId: string,
        title: string,
        coverImg: string,
    }[] // these are the things the user is involved in -- like artilce accounts, podcast group
}