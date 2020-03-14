import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { Sermon } from '././schema/sermon.interface';
import { Folder } from '../shared/schemas/folder.interface';

import { sermonDetails } from '../../demo-database/resources(all are tables)/sermons-data';

import { sermonFolders, folderDetails } from '../../demo-database/resources-folders/sermonFolder-data';

@Injectable()
export class SermonsService {
    constructor(
        @Inject('SERMON_MODEL')
        private SermonModel: Model<Sermon>,
        @Inject('FOLDER_MODEL')
        private FolderModel: Model<Folder>,
        ) { }
        
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

    async addFolder(data): Promise<string> {
        const createdFolder = new this.FolderModel(data);
        await createdFolder.save();
        return 'sermon series created successfully';
    }

    updateSermon(id, data) {
        return ['sermon updated successfully', data];
    }

    async updateFolder(id, data) {
        const folderToUpdate = await this.FolderModel.findOne(id);
        console.log(folderToUpdate);
        return ['folder updated successfully', data];
    }

    deleteSermon(id) {
        return 'sermon deleted';
    }

    deleteSermonFolder(id) {
        return 'sermon folder deleted succesfully';
    }
}
