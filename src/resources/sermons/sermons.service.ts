import { Injectable } from '@nestjs/common';

import { sermons } from '../../demo-database/resources(all are tables)/sermons-data';

import { sermonFolders, sermonDetails } from '../../demo-database/resources-folders/sermonFolder-data';

@Injectable()
export class SermonsService {
    getFolders() {
        return sermonFolders;
    }

    getFolderDetails(folderId) {
        return sermonDetails;
    }

    getSermon(id) {
        return sermons.find(sermon => {
           return sermon.sermonId == id;
        });
    }

    addSermon(data) { // work on this later
        return 'add sermons here with data';
    }
}
