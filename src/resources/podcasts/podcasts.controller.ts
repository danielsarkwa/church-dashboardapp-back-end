import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreatePodcastDto } from '../../data-info/entry-dto/podcast.dto';

import { CreateFolder } from '../../data-info/entry-dto/folder.dto';

import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) { }

  @Get()
  loadPodcastFolders() {
      return this.podcastsService.getFolders();
  }

  @Get(':folderId')
  loadPodcastFolder(@Param('folderId') id) {
    return this.podcastsService.getFolderDetails(id);
  }

  @Get('one/:podcastId')
  loadPodcast(@Param('podcastId') id) {
    return this.podcastsService.getPodcast(id);
  }

  @Post()
  addPodcast(@Body() createPodcastDto: CreatePodcastDto) {
    return this.podcastsService.addPodcast(createPodcastDto);
  }

  @Post('folders')
  addFolder(@Body() createSermonFolder: CreateFolder) {
    return this.podcastsService.addFolder(createSermonFolder);
  }

  @Put(':id')
  updatePodcast(
    @Param('id') id,
    @Body() updatePodcastDto: CreatePodcastDto
  ) {
    return this.podcastsService.updatePodcast(id, updatePodcastDto);
  }

  @Put('folders/:folderId')
  updateFolder(
    @Param('id') id,
    @Body() updateFolderDto: CreateFolder
  ) {
    return this.podcastsService.updateFolder(id, updateFolderDto);
  }

  @Delete('folders/:folderId')
  deletePodcastFolder(@Param('folderId') id) {
    return this.podcastsService.deletePodcastFolder(id);
  }

  @Delete(':id')
  deletePodcast(@Param('sermonId') id) {
    return this.podcastsService.deletePodcast(id);
  }
}
