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

    addAnnouncement(data) {
        return ['announcement created succesfully', data];
    }

    updateAnnouncement(id, data) {
        return ['announcement updated successfully', data];
    }

    deleteAnnouncement(id) {
        return 'announcement deleted successfully';
    }
}
