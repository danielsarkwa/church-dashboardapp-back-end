import { Injectable } from '@nestjs/common';

// import { sermons } from '../../demo-database/resources(all are tables)/sermons-data';

import { sermonFolders, sermonDetails } from '../../demo-database/resources-folders/sermonFolder-data';

@Injectable()
export class SermonsService {
    getFolders() {
        return sermonFolders;
    }

    getFolderDetails(folderId) { // this will return only the sermon / files
        return sermonDetails;
    }
}
