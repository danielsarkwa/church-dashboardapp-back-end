import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import * as _lodash from 'lodash';

import { Sermon } from '././schema/sermon.interface';
import { Folder } from '../shared/schemas/folder.interface';

import { sermonDetails } from '../../demo-database/resources(all are tables)/sermons-data';

import { sermonFolders } from '../../demo-database/resources-folders/sermonFolder-data';

@Injectable()
export class SermonsService {
    constructor(
        @Inject('SERMON_MODEL')
        private SermonModel: Model<Sermon>,
        @Inject('FOLDER_MODEL')
        private FolderModel: Model<Folder>,
        ) { }
        
    async getFolders() { // TO-DO: delete the unnessary items from the objects
        try {
            const series = await this.FolderModel.find({'belongsTo': 'sermon'});
            return series;
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: Could not get series data';
        };
    }

    async getFolderDetails(folderId) { // @TO-DO: implement adding the list of sermons before responding to client
        try {
            const folderDetails = await this.FolderModel.findById(folderId);
            if(folderDetails) {
                return folderDetails;
                // build the sermon listing within the folder to send to the client
                // skip errors, if the sermon is in the folder but not in the sermons collections in db, log error to db
            } else {
                // @TO-DO: respond using the status code
                return 'Error: specified series not found';
            };
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: Caught on processing data';
        };
    }

    getSermon(id) {
        return sermonDetails;
    }

    async addSermon(data): Promise<string> {
        // update the folder it was placed in (numberoffiles, file, totaltime)
        // validate that the sermon title is not avaliable
        try {
            const newSermon = await new this.SermonModel(data).save();
            const updateData = {
                "fileId": newSermon._id,
                "duration": data.duration
            };
            // implement the update of the folder the new file dwells
            return 'sermon created successfully';
        } catch (ex) {
            // @TO-DO: respond using the status code
            return 'Error: Could not create new sermon';
        };
    }

    async addFolder(data): Promise<string> { // @DONE
        try {
            await new this.FolderModel(data).save();
            return 'sermon series created successfully';
        } catch(ex) {
            return 'Error: Could not create new sermon series';
        }
    }

    updateSermon(id, data) {
        return ['sermon updated successfully', data];
    }

    async updateFolder(id, data) { // @DONE
        // @TO-DO: data intergrity (the title should be unique all the time)
        const toUpdate = await this.FolderModel.findById(id);
        if (toUpdate) {
            const detailstoUpdate = _lodash.pick(data, ['title', 'coverImg', 'files']);
            for(const item in detailstoUpdate) {
                if(item == 'files') {
                    for(const item of detailstoUpdate['files']) {
                        toUpdate['files'].push(item.fileId);
                        ++toUpdate['numberOfFiles'];
                        toUpdate['totalTime'] += item.duration;
                    };
                } else {
                    toUpdate[item] = detailstoUpdate[item];
                };
            };
            await toUpdate.save();
        } else {
            // @TO-DO: respond using the status code
            return 'Error: specified series not found';
        };
        return 'series updated successfully';
    }

    deleteSermon(id) {
        return 'sermon deleted';
    }

    async deleteSermonFolder(id) { // @DONE
        try {
            const toDelete = await this.FolderModel.findByIdAndRemove(id);
            if(toDelete) {
                return 'sermon series deleted succesfully';
            } else {
                return 'Error: specified series not found';
            }
        } catch(ex) {
             // @TO-DO: respond using the status code
             return 'Error: Could not delete the series;'
        }
    }
}
