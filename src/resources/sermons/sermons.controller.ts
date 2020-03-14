import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateSermonDto } from '../../data-info/entry-dto/sermon.dto';

import { CreateFolder } from '../../data-info/entry-dto/folder.dto';

import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) { }

  @Get()
  async loadSermonFolders() { // @DONE
    return await this.sermonsService.getFolders();
  }

  @Get(':folderId') // @TO-DO: implement adding the list of sermons before responding to client
  loadSermonsFolder(@Param('folderId') id) {
    return this.sermonsService.getFolderDetails(id);
  }

  @Get('one/:sermonId')
  loadSermon(@Param('sermonId') id) {
    return this.sermonsService.getSermon(id);
  }

  @Post()
  async addSermon(@Body() createSermonDto: CreateSermonDto) {
    return await this.sermonsService.addSermon(createSermonDto);
  }

  @Post('folders') // @DONE
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

  @Put('folders/:folderId') // @DONE
  async updateFolder(
    @Param('folderId') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return await this.sermonsService.updateFolder(id, updateFolderDto);
  }

  @Delete('folders/:folderId') // @DONE
  async deleteSermonFolder(@Param('folderId') id): Promise<string> {
    return await this.sermonsService.deleteSermonFolder(id);
  }

  @Delete(':sermonId')
  deleteSermon(@Param('sermonId') id) {
    return this.sermonsService.deleteSermon(id);
  }

}
