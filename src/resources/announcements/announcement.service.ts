import { Injectable } from '@nestjs/common';

import { announcements, announcementDetails } from '../../demo-database/resources(all are tables)/announcements-data';

@Injectable()
export class AnnouncementsService {
    getAnnouncements() {
        return announcements;
    }

    getAnnouncementDetail(id) {
        return announcementDetails;
    }
}
