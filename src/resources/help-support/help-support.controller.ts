import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateFaqDto } from '../../data-info/entry-dto/faq.dto';

import { HelpSupportService } from './helpSupport.service';

@Controller('helpSupport')
export class HelpSupportController {
  constructor(private helpSupportService: HelpSupportService) { }

  // Feedback
  @Get('feedbacks')
  loadUserFeedbacks() {
    return this.helpSupportService.getUsersFeedbacks();
  }

  @Get('one/feedback/:feedbackId')
  loadFeedback(@Param('feedbackId') id) {
    return this.helpSupportService.getUserFeedback(id);
  }

  @Delete('one/feedback/:feedbackId')
  deleteFeedback(@Param('feedbackId') id) {
    return this.helpSupportService.deleteFeedback(id);
  }

  // suggestFeatures
  @Get('suggestFeatures')
  loadSuggestedFeatures() {
    return this.helpSupportService.getSuggestedFeatures();
  }  

  @Get('one/suggestFeatures/:suggestFeatureId')
  loadSuggestedFeature(@Param('suggestFeatureId') id) {
    return this.helpSupportService.getSuggestedFeature(id);
  }
  
  @Delete('one/suggestFeatures/:suggestFeatureId')
  deleteSuggestFeatures(@Param('suggestFeatureId') id) {
    return this.helpSupportService.deleteSuggestFeature(id);
  }

  // Faq
  @Get('faqs')
  loadFaqs() {
    return this.helpSupportService.getFaqs();
  } 

  @Get('one/faqs/:faqId')
  loadFaq(@Param('faqId') id) {
    return this.helpSupportService.getFaq(id);
  }

  @Post('faqs')
  addFaq(@Body() createFaqDto: CreateFaqDto) {
    return this.helpSupportService.addFaq(createFaqDto);
  }

  @Put('one/faqs/:faqId')
  updateFaq(
    @Param('faqId') id,
    @Body() updateFaqDto: CreateFaqDto) {
    return this.helpSupportService.updateFaq(id, updateFaqDto);
  }

  @Delete('one/faqs/:faqId')
  deleteFaq(@Param('faqId') id) {
    return this.helpSupportService.deleteFaq(id);
  }
}
