import { Injectable } from '@nestjs/common';

import { articleDetails } from '../../demo-database/resources(all are tables)/articles-data';

import { articleFolders, articleFolderDetails } from '../../demo-database/resources-folders/articleFolder-data';

@Injectable()
export class ArticlesService {
    getFolders() {
        return articleFolders;
    }

    getFolderDetails(folderId) { // this will return only a article files from the a folder
        return articleFolderDetails;
    }

    getArticle(id) {
        return articleDetails;
    }

    addArticle(data) {
        return ['article created succesfully', data];
    }

    addFolder(data) {
        return ['folder created successfully', data];
    } 

    updateArticle(id, data) {
        return ['article updated successfully', data];
    }

    updateFolder(id, data) {
        return ['folder updated successfully', data];
    }

    deleteArticle(id) {
        return 'article deleted';
    }

    deleteArticleFolder(id) {
        return 'article folder deleted succesfully';
    }
    
}
