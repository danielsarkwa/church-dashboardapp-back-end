import { Injectable } from '@nestjs/common';

import { podcastDetails } from '../../demo-database/resources(all are tables)/podcasts-data';

import { podcastFolders, folderDetails } from '../../demo-database/resources-folders/podcastFolder-data';

@Injectable()
export class PodcastsService {
    getFolders() {
        return podcastFolders;
    }

    getFolderDetails(folderId) {
        return folderDetails;
    }

    getPodcast(id) {
        return podcastDetails;
    }
    
}
