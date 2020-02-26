import { Injectable } from '@nestjs/common';

import { podcasts } from '../../demo-database/resources(all are tables)/podcasts-data';

@Injectable()
export class PodcastsService {
    getPodcasts() {
        return podcasts;
    }
}
