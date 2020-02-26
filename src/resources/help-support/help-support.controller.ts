import { Controller, Get } from '@nestjs/common';

import { HelpSupportService } from './helpSupport.service';

@Controller('helpSupport')
export class HelpSupportController {
    constructor(private helpSupportService: HelpSupportService) { }
    @Get('feedback')
    loadUserFeedbacks() {
        return this.helpSupportService.getUsersFeedbacks();
    }

    @Get('suggestFeature')
    loadSuggestedFeatures() {
        return this.helpSupportService.getSuggestedFeatures();
    }

    @Get('faqs')
    loadFaqs() {
        return this.helpSupportService.getFaqs();
    }
}
