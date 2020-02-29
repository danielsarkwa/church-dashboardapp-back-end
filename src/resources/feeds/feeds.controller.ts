import { Controller, Get, Param } from '@nestjs/common';

import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
  constructor(private feedsService: FeedsService) { }

  @Get()
  loadFeeds() {
    return this.feedsService.getFeeds();
  }
  
  @Get(':feedId')
  loadFeedDetails(@Param('feedId') id ) {
    return this.feedsService.getFeedDetails(id);
  }
  
}
