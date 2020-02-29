import { Controller, Get, Param } from '@nestjs/common';

import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private podcastsService: PodcastsService) { }

  @Get()
  loadPodcastFolders() {
      return this.podcastsService.getFolders();
  }

  @Get(':folderId')
  loadPodcastFolder(@Param('folderId') id) {
    return this.podcastsService.getFolderDetails(id);
  }
}
