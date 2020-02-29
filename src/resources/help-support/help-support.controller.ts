import { Controller, Get, Param } from '@nestjs/common';

import { HelpSupportService } from './helpSupport.service';

@Controller('helpSupport')
export class HelpSupportController {
    constructor(private helpSupportService: HelpSupportService) { }
    @Get('feedbacks')
    loadUserFeedbacks() {
        return this.helpSupportService.getUsersFeedbacks();
    }

    @Get('one/feedback/:feedbackId')
    loadFeedback(@Param('feedbackId') id) {
        return this.helpSupportService.getUserFeedback(id);
    }

    @Get('suggestFeatures')
    loadSuggestedFeatures() {
        return this.helpSupportService.getSuggestedFeatures();
    }

    @Get('one/suggestFeatures/:suggestFeatureId')
    loadSuggestedFeature(@Param('suggestFeatureId') id) {
        return this.helpSupportService.getSuggestedFeature(id);
    }

    @Get('faqs')
    loadFaqs() {
        return this.helpSupportService.getFaqs();
    }

    @Get('one/faqs/:faqId')
    loadFaq(@Param('sermonId') id) {
        return this.helpSupportService.getFaq(id);
    }
}
