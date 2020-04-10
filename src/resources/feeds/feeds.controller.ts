import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreateFeedDto } from '../../adapter/entry-dto/feed.dto';
import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
  constructor(private feedsService: FeedsService) { }

  @Get()
  loadFeeds(@Query('pageNumber') pageNumber) {
    return this.feedsService.getFeeds(pageNumber);
  }
  
  @Get(':feedId')
  loadFeedDetails(@Param('feedId') id ) {
    return this.feedsService.getFeedDetails(id);
  }

  @Post()
  async addFeed(@Body() createFeedDto: CreateFeedDto) {
    return await this.feedsService.addFeed(createFeedDto);
  }

  @Put(':id')
  updateFeed(
    @Param('id') id,
    @Body() updateFeedDto: CreateFeedDto
  ) {
    return this.feedsService.updateFeed(id, updateFeedDto);
  }

  @Delete(':feedId')
  deleteFeed(@Param('feedId') id) {
    return this.feedsService.deleteFeed(id);
  }

}
