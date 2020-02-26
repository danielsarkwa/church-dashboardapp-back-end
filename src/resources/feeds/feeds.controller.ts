import { Controller, Get } from '@nestjs/common';

import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
  constructor(private feedsService: FeedsService) { }

  @Get()
  loadFeeds() {
    return this.feedsService.getFeeds();
  }
  
}
