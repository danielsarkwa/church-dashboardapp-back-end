import { Injectable } from '@nestjs/common';

import { feeds } from '../../demo-database/resources(all are tables)/feeds-data';

@Injectable()
export class FeedsService {
    getFeeds() {
        return feeds;
    }
}
