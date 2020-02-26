import { Controller, Get } from '@nestjs/common';

import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private podcastsService: PodcastsService) { }

  @Get()
  loadPodcasts() {
      return this.podcastsService.getPodcasts();
  }
}
