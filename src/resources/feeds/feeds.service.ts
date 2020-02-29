import { Injectable } from '@nestjs/common';

import { feeds, feedDetails } from '../../demo-database/resources(all are tables)/feeds-data';

@Injectable()
export class FeedsService {
    getFeeds() {
        return feeds;
    }

    getFeedDetails(id) {
        return feedDetails;
    }
}
