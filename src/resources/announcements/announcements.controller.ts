import { Controller, Get, Param } from '@nestjs/common';

import { AnnouncementsService } from './announcement.service';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private announcementsService: AnnouncementsService) { }
  
  @Get()
  loadAnnouncements() {
     return this.announcementsService.getAnnouncements();
  }

  @Get(':announcementId')
  loadAnnouncementDetails(@Param('announcementId') id) {
     return this.announcementsService.getAnnouncementDetail(id);
  }
}
