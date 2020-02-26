import { Injectable } from '@nestjs/common';

import { podcasts } from '../../demo-database/podcasts-data';

@Injectable()
export class PodcastsService {
    getPodcasts() {
        return podcasts;
    }
}
