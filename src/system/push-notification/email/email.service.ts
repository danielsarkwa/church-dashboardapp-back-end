import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailNotificationService {
    sendMail(data) {
        return 'mail send to user';
    }
}

/**
 *** sending mail
 * on adding new admin
 * on broadcasting app standard message
 * on sending specific email to some users (group admins)
 * 
 * build a specific template
 * build a content variable
 */