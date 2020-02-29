import { Injectable } from '@nestjs/common';

// import { articles, articleDetails } from '../../demo-database/resources(all are tables)/articles-data';

import { articleFolders, articleFolderDetails } from '../../demo-database/resources-folders/articleFolder-data';

@Injectable()
export class ArticlesService {
    getFolders() {
        return articleFolders;
    }

    getFolderDetails(folderId) { // this will return only a article files from the a folder
        return articleFolderDetails;
    }
}
