import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateFeedDto } from '../../data-info/entry-dto/feed.dto';

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

  @Post()
  addFeed(@Body() createFeedDto: CreateFeedDto) {
    return this.feedsService.addFeed(createFeedDto);
  }

  @Put(':id')
  updateFeed(
    @Param('id') id,
    @Body() updateFeedDto: CreateFeedDto
  ) {
    return this.feedsService.updateFeed(id, updateFeedDto);
  }

  @Delete(':id')
  deleteFeed(@Param('feedId') id) {
    return this.feedsService.deleteFeed(id);
  }
}
