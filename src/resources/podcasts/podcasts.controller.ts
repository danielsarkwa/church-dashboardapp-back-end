import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreatePodcastDto } from '../../adapter/entry-dto/podcast.dto';
import { CreateFolder } from '../../adapter/entry-dto/folder.dto';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) { }

  @Get('channels')
  async loadPodcastChannels(@Query('pageNumber') pageNumber) {
      return await this.podcastsService.PodcastChannels(pageNumber);
  }

  @Get(':channelId')
  async loadPodcastChannel(@Param('channelId') id) {
    return await this.podcastsService.PodcastChannel(id);
  }

  @Get('one/:podcastId')
  async loadPodcast(@Param('podcastId') id, @Query('state') state) {
    return await this.podcastsService.getPodcast(id, state);
  }

  @Post()
  async addPodcast(@Body() createPodcastDto: CreatePodcastDto) {
    return await this.podcastsService.addPodcast(createPodcastDto);
  }

  @Post('channels')
  async addChannel(@Body() createSermonFolder: CreateFolder) {
    return await this.podcastsService.addChannel(createSermonFolder);
  }

  @Put(':id')
  async updatePodcast(
    @Param('id') id,
    @Body() updatePodcastDto: CreatePodcastDto
  ) {
    return await this.podcastsService.updatePodcast(id, updatePodcastDto);
  }

  @Put('channels/:channelId')
  async updateChannel(
    @Param('channelId') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return await this.podcastsService.updateChannel(id, updateFolderDto, 'add');
  }

  @Delete('channels/:channelId')
  async deletePodcastChannel(@Param('channelId') id) {
    return await this.podcastsService.deletePodcastChannel(id);
  }

  @Delete(':podcastId')
  async deletePodcast(@Param('podcastId') id) {
    return await this.podcastsService.deletePodcast(id);
  }
}
