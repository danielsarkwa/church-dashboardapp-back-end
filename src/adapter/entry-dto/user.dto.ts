
export class CreateUserDto {
    userName?: string;
    email?: string;
    password?: string;
    type?: string;
}

export class CreateAdminDto extends CreateUserDto {
    role?: string;
}

// this will send an email to the admin with the details about their role
// ROLE definition
/**
 * Basic
    - access articles list(channels,article), details
    - access events list
    - access announcements list, delete
    - access all feeds
    - access all help and support
    - access podcast list (channels, podcasts), details (channels, podcasts)
    - access sermon list(series,sermons), details, (series,sermons)
    - access users list

 * Pro
    

 * Super
    - access to everything

 */