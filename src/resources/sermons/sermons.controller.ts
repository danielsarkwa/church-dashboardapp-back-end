import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateSermonDto } from '../../data-info/entry-dto/sermon.dto';

import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) { }

  @Get()
  loadSermonFolders() {
    return this.sermonsService.getFolders();
  }

  @Get(':folderId')
  loadSermonsFolder(@Param('folderId') id) {
    return this.sermonsService.getFolderDetails(id);
  }

  @Get('one/:sermonId')
  loadSermon(@Param('sermonId') id) {
    return this.sermonsService.getSermon(id);
  }

  @Post()
  addSermon(@Body() createSermonDto: CreateSermonDto) {
    return this.sermonsService.addSermon(createSermonDto);
  }

  @Put(':id')
  editSermon(
    @Param('id') id,
    @Body() updateSermonDto: CreateSermonDto
  ) {
    return this.sermonsService.updateSermon(id, updateSermonDto);
  }

  @Delete(':id')
  deleteSermon(@Param('sermonId') id) {
    return this.sermonsService.deleteSermon(id);
  }

}
