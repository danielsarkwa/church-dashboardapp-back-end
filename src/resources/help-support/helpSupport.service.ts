import { Injectable } from '@nestjs/common';

import { usersFeedbacks, suggestions, faqs } from '../../demo-database/resources(all are tables)/helpSupport-data';

@Injectable()
export class HelpSupportService {
    getUsersFeedbacks() {
        return usersFeedbacks;
    }

    getSuggestedFeatures() {
        return suggestions;
    }

    getFaqs() {
        return faqs;
    }
}
