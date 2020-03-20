import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreateSermonDto } from '../../data-info/entry-dto/sermon.dto';
import { CreateFolder } from '../../data-info/entry-dto/folder.dto';
import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) { }

  @Get('/series')
  async loadSermonFolders() {
    return await this.sermonsService.getFolders();
  }

  @Get(':folderId')
  async loadSermonsFolder(@Param('folderId') id) {
    return await this.sermonsService.getFolderDetails(id);
  }

  @Get()
  async loadAllSermons() {
    return await this.sermonsService.getAllSermons();
  }

  @Get('one/:sermonId')
  async loadSermon(@Param('sermonId') id, @Query('state') state) {
    return await this.sermonsService.getSermon(id, state);
  }

  @Post()
  async addSermon(@Body() createSermonDto: CreateSermonDto) {
    return await this.sermonsService.addSermon(createSermonDto);
  }

  @Post('folders')
  async addFolder(@Body() createSermonFolder: CreateFolder): Promise<string> {
    return await this.sermonsService.addFolder(createSermonFolder);
  }

  @Put(':id')
  async updateSermon(
    @Param('id') id,
    @Body() updateSermonDto: CreateSermonDto
  ) {
    return await this.sermonsService.updateSermon(id, updateSermonDto);
  }

  @Put('folders/:folderId')
  async updateFolder(
    @Param('folderId') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return await this.sermonsService.updateFolder(id, updateFolderDto, 'add');
  }

  @Delete('folders/:folderId')
  async deleteSermonFolder(@Param('folderId') id): Promise<string> {
    return await this.sermonsService.deleteSermonFolder(id);
  }

  @Delete(':sermonId')
  async eleteSermon(@Param('sermonId') id) {
    return await this.sermonsService.deleteSermon(id);
  }
}
