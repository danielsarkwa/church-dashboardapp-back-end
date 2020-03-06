import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateAnnouncementDto } from '../../data-info/entry-dto/announcement.dto';

import { AnnouncementsService } from './announcements.service';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) { }
  
  @Get()
  loadAnnouncements() {
     return this.announcementsService.getAnnouncements();
  }

  @Get(':announcementId/details')
  loadAnnouncementDetails(@Param('announcementId') id) {
     return this.announcementsService.getAnnouncementDetail(id);
  }

  @Post()
  addAnnouncement(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementsService.addAnnouncement(createAnnouncementDto);
  }

  @Put(':id')
  updateAnnouncement(
    @Param('id') id,
    @Body() updateAnnouncementDto: CreateAnnouncementDto
  ) {
    return this.announcementsService.updateAnnouncement(id, updateAnnouncementDto);
  }

  @Delete(':id')
  deleteAnnouncement(@Param('announcementId') id) {
    return this.announcementsService.deleteAnnouncement(id);
  }

}
