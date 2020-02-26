import { Injectable } from '@nestjs/common';

import { announcements } from '../../demo-database/announcements-data';

@Injectable()
export class AnnouncementsService {
    getAnnouncements() {
        return announcements;
    }
}
