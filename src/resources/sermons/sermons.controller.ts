import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreateSermonDto } from '../../data-info/entry-dto/sermon.dto';
import { CreateFolder } from '../../data-info/entry-dto/folder.dto';
import { SermonsService } from './sermons.service';

@Controller('sermons')
export class SermonsController {
  constructor(private readonly sermonsService: SermonsService) { }

  @Get('series')
  async loadSermonSeriess() {
    return await this.sermonsService.getSeries();
  }

  @Get(':seriesId')
  async loadSermonSeries(@Param('seriesId') id) {
    return await this.sermonsService.getSeriesDetails(id);
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

  @Post('series')
  async addSeries(@Body() createSermonFolder: CreateFolder): Promise<string> {
    return await this.sermonsService.addSeries(createSermonFolder);
  }

  @Put(':id')
  async updateSermon(
    @Param('id') id,
    @Body() updateSermonDto: CreateSermonDto
  ) {
    return await this.sermonsService.updateSermon(id, updateSermonDto);
  }

  @Put('series/:seriesId')
  async updateSeries(
    @Param('seriesId') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return await this.sermonsService.updateSeries(id, updateFolderDto, 'add');
  }

  @Delete('series/:seriesId')
  async deleteSeries(@Param('seriesId') id): Promise<string> {
    return await this.sermonsService.deleteSeries(id);
  }

  @Delete(':sermonId')
  async deleteSermon(@Param('sermonId') id) {
    return await this.sermonsService.deleteSermon(id);
  }
}
