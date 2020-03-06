import { Injectable } from '@nestjs/common';

import { sermonDetails } from '../../demo-database/resources(all are tables)/sermons-data';

import { sermonFolders, folderDetails } from '../../demo-database/resources-folders/sermonFolder-data';

@Injectable()
export class SermonsService {
    getFolders() {
        return sermonFolders;
    }

    getFolderDetails(folderId) {
        return folderDetails;
    }

    getSermon(id) {
        return sermonDetails;
    }

    addSermon(data) {
        return ['sermon created succesfully', data];
    }

    addFolder(data) {
        return ['folder created successfully', data];
    } 

    updateSermon(id, data) {
        return ['sermon updated successfully', data];
    }

    updateFolder(id, data) {
        return ['folder updated successfully', data];
    }

    deleteSermon(id) {
        return 'sermon deleted';
    }

    deleteSermonFolder(id) {
        return 'sermon folder deleted succesfully';
    }
}
