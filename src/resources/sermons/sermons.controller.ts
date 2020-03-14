import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateSermonDto } from '../../data-info/entry-dto/sermon.dto';

import { CreateFolder } from '../../data-info/entry-dto/folder.dto';

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

  @Post('folders')
  async addFolder(@Body() createSermonFolder: CreateFolder): Promise<string> {
    return await this.sermonsService.addFolder(createSermonFolder);
  }

  @Put(':id')
  updateSermon(
    @Param('id') id,
    @Body() updateSermonDto: CreateSermonDto
  ) {
    return this.sermonsService.updateSermon(id, updateSermonDto);
  }

  @Put('folders/:folderId')
  async updateFolder(
    @Param('id') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return await this.sermonsService.updateFolder(id, updateFolderDto);
  }

  @Delete('folders/:folderId')
  deleteSermonFolder(@Param('folderId') id) {
    return this.sermonsService.deleteSermonFolder(id);
  }

  @Delete(':id')
  deleteSermon(@Param('sermonId') id) {
    return this.sermonsService.deleteSermon(id);
  }

}
