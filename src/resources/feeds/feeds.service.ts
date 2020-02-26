import { Injectable } from '@nestjs/common';

import { feeds } from '../../demo-database/feeds-data';

@Injectable()
export class FeedsService {
    getFeeds() {
        return feeds;
    }
}
