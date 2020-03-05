import { Injectable } from '@nestjs/common';
import * as _ from "lodash";

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

    addSermon(data) {
        // save the sermon details to database and then return item id
        const sermonData = {
            sermonId: 'asadou9ewnsis',
            ...data
        };
        sermons.push(sermonData);

        // save the id of the sermon to the associated folder
        const sermonFolder = sermonFolders.find(folder => {
            return folder.folderId == data.folderId;
        });
        sermonFolder.files.push(sermonData.sermonId);

        // return message
        return 'sermon created succesfully';
    }

    updateSermon(id, data) {
        // get the item to update
        const sermonToUpdate = sermons.find(sermon => {
            return sermon.sermonId == id;
        });
        
        // make changes to sermon

        // return message
        return 'sermon updated successfully';
    }

    deleteSermon(id) {
        return 'sermon deleted';
    }
}
