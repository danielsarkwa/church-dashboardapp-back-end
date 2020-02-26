import { Injectable } from '@nestjs/common';

import { usersFeedbacks, suggestions } from '../../demo-database/helpSupport-data';

@Injectable()
export class HelpSupportService {
    getUsersFeedbacks() {
        return usersFeedbacks;
    }

    getSuggestedFeatures() {
        return suggestions;
    }
}
