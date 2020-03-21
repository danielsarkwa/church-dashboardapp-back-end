
export class CreateAdminDto {
    userName: string;
    email: string;
    password: string;
    role: string;
}

/* this sends email to the email to notify that he or she has been added to the admin
* the role of the admin will be listed below for him or her to be aware of the does and don'ts
* this role is defines what the user can do and cannot do and what they see on the front-end
*/