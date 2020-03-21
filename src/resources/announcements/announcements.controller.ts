import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateAnnouncementDto } from '../../data-info/entry-dto/announcement.dto';
import { AnnouncementsService } from './announcements.service';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) { }
  
  @Get()
  async loadAnnouncements() {
     return await this.announcementsService.getAnnouncements();
  }

  @Get(':announcementId')
  async loadAnnouncementDetails(@Param('announcementId') id) {
     return await this.announcementsService.getAnnouncementDetail(id);
  }

  @Post()
  async addAnnouncement(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return await this.announcementsService.addAnnouncement(createAnnouncementDto);
  }

  @Put(':announcementId')
  async updateAnnouncement(
    @Param('announcementId') id,
    @Body() updateAnnouncementDto: CreateAnnouncementDto
  ) {
    return await this.announcementsService.updateAnnouncement(id, updateAnnouncementDto);
  }

  @Delete(':announcementId')
  async deleteAnnouncement(@Param('announcementId') id) {
    return await this.announcementsService.deleteAnnouncement(id);
  }

}
