import { Injectable } from '@nestjs/common';

import { podcasts } from '../../demo-database/resources(all are tables)/podcasts-data';

import { podcastFolders, podcastDetails } from '../../demo-database/resources-folders/podcastFolder-data';

@Injectable()
export class PodcastsService {
    getFolders() {
        return podcastFolders;
    }

    getFolderDetails(folderId) { // this will return only a podcast files from the a folder
        return podcastDetails;
    }

    getPodcast(id) {
        return podcasts.find(podcast => {
            return podcast.podcastId == id;
         });
    }
    
}
