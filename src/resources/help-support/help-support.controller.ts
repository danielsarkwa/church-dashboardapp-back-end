import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CreateFaqDto } from '../../adapter/entry-dto/faq.dto';
import { HelpSupportService } from './help-support.service';

@Controller('helpSupport')
export class HelpSupportController {
  constructor(private helpSupportService: HelpSupportService) { }

  @Get('feedbacks')
  loadUserFeedbacks(@Query('pageNumber') pageNumber) {
    return this.helpSupportService.getUsersFeedbacks(pageNumber);
  }
  
  @Get('faqs')
  async loadFaqs(@Query('pageNumber') pageNumber) {
    return await this.helpSupportService.getFaqs(pageNumber);
  }

  @Get('suggestFeatures')
  loadSuggestedFeatures(@Query('pageNumber') pageNumber) {
    return this.helpSupportService.getSuggestedFeatures(pageNumber);
  }

  @Post('faqs')
  async addFaq(@Body() createFaqDto: CreateFaqDto) {
    return await this.helpSupportService.addFaq(createFaqDto);
  }

  @Put('one/faqs/:faqId')
  async updateFaq(
    @Param('faqId') id,
    @Body() updateFaqDto: CreateFaqDto) {
    return await this.helpSupportService.updateFaq(id, updateFaqDto);
  }

  @Delete('one/feedback/:feedbackId')
  deleteFeedback(@Param('feedbackId') id) {
    return this.helpSupportService.deleteEntity(id);
  }
  
  @Delete('one/suggestFeatures/:suggestFeatureId')
  deleteSuggestFeatures(@Param('suggestFeatureId') id) {
    return this.helpSupportService.deleteEntity(id);
  }
  
  @Delete('one/faqs/:faqId')
  async deleteFaq(@Param('faqId') id) {
    return await this.helpSupportService.deleteEntity(id);
  }

}
