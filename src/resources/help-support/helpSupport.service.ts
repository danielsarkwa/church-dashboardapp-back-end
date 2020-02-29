import { Injectable } from '@nestjs/common';

import { usersFeedbacks, userFeedbackDetails, suggestions, suggestionDetails, faqs, faqDetails } from '../../demo-database/resources(all are tables)/helpSupport-data';

@Injectable()
export class HelpSupportService {
    getUsersFeedbacks() {
        return usersFeedbacks;
    }

    getUserFeedback(id) {
        return userFeedbackDetails;
    }

    getSuggestedFeatures() {
        return suggestions;
    }

    getSuggestedFeature(id) {
        return suggestionDetails
    }

    getFaqs() {
        return faqs;
    }

    getFaq(id) {
        return faqDetails
    }
}
