import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreatePodcastDto } from '../../data-info/entry-dto/podcast.dto';
import { CreateFolder } from '../../data-info/entry-dto/folder.dto';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) { }

  @Get('channels')
  loadPodcastChannels() {
      return this.podcastsService.PodcastChannels();
  }

  @Get(':channelId')
  loadPodcastChannel(@Param('channelId') id) {
    return this.podcastsService.PodcastChannel(id);
  }

  @Get('one/:podcastId')
  loadPodcast(@Param('podcastId') id, @Query('state') state) {
    return this.podcastsService.getPodcast(id, state);
  }

  @Post()
  addPodcast(@Body() createPodcastDto: CreatePodcastDto) {
    return this.podcastsService.addPodcast(createPodcastDto);
  }

  @Post('channels')
  addChannel(@Body() createSermonFolder: CreateFolder) {
    return this.podcastsService.addChannel(createSermonFolder);
  }

  @Put(':id')
  updatePodcast(
    @Param('id') id,
    @Body() updatePodcastDto: CreatePodcastDto
  ) {
    return this.podcastsService.updatePodcast(id, updatePodcastDto);
  }

  @Put('channels/:channelId')
  updateChannel(
    @Param('channelId') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return this.podcastsService.updateChannel(id, updateFolderDto, 'add');
  }

  @Delete('channels/:channelId')
  deletePodcastChannel(@Param('channelId') id) {
    return this.podcastsService.deletePodcastChannel(id);
  }

  @Delete(':podcastId')
  deletePodcast(@Param('podcastId') id) {
    return this.podcastsService.deletePodcast(id);
  }
}
