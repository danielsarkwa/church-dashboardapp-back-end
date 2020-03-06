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
        return 'sermon created succesfully';
    }

    updateSermon(id, data) {
        return 'sermon updated successfully';
    }

    deleteSermon(id) {
        return 'sermon deleted';
    }
}
