import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';

import { CreateSermonDto } from '../../data-info/entry-dto/sermon.dto';

import { CreateFolder } from '../../data-info/entry-dto/folder.dto';

import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) { }

  @Get('/series') // @TO-DO: delete the unnessary items from the objects before sending
  async loadSermonFolders() {
    return await this.sermonsService.getFolders();
  }

  @Get(':folderId') // @TO-DO: implement adding the list of sermons before responding to client
  async loadSermonsFolder(@Param('folderId') id) {
    return await this.sermonsService.getFolderDetails(id);
  }

  @Get()
  async loadAllSermons() {
    return await this.sermonsService.getAllSermons();
  }

  @Get('one/:sermonId') // @TO-DO
  async loadSermon(@Param('sermonId') id, @Query('state') state) {
    return await this.sermonsService.getSermon(id, state);
  }

  @Post() // @TO-DO
  async addSermon(@Body() createSermonDto: CreateSermonDto) {
    return await this.sermonsService.addSermon(createSermonDto);
  }

  @Post('folders') // @TO-DO
  async addFolder(@Body() createSermonFolder: CreateFolder): Promise<string> {
    return await this.sermonsService.addFolder(createSermonFolder);
  }

  @Put(':id') // @TO-DO
  async updateSermon(
    @Param('id') id,
    @Body() updateSermonDto: CreateSermonDto
  ) {
    return await this.sermonsService.updateSermon(id, updateSermonDto);
  }

  @Put('folders/:folderId') // @TO-DO
  async updateFolder(
    @Param('folderId') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return await this.sermonsService.updateFolder(id, updateFolderDto, 'add');
  }

  @Delete('folders/:folderId') // @TO-DO
  async deleteSermonFolder(@Param('folderId') id): Promise<string> {
    return await this.sermonsService.deleteSermonFolder(id);
  }

  @Delete(':sermonId') // @TO-DO
  async eleteSermon(@Param('sermonId') id) {
    return await this.sermonsService.deleteSermon(id);
  }

}
