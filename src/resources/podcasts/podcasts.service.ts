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

    addPodcast(data) {
        return ['podcast created successfully', data];
    }

    addFolder(data) {
        return ['folder created successfully', data];
    }

    updatePodcast(id, data) {
        return ['podcast successfully created', data];
    }

    updateFolder(id, data) {
        return ['folder updated successfully', data];
    }
    
    deletePodcast(id) {
        return 'sermon deleted';
    }

    deletePodcastFolder(id) {
        return 'sermon folder deleted succesfully';
    }
}
