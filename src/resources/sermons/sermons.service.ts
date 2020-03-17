import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import * as mongoose from 'mongoose';
import * as _lodash from 'lodash';

import { Sermon } from '././schema/sermon.interface';
import { Folder } from '../shared/schemas/folder.interface';

/**
 * build the data with the presenter before sending it to the user
 */

@Injectable()
export class SermonsService {
    constructor(
        @Inject('SERMON_MODEL')
        private SermonModel: Model<Sermon>,
        @Inject('FOLDER_MODEL')
        private FolderModel: Model<Folder>,
        ) { }
        
    async getFolders() { // @TO-DO
        try {
            const series = await this.FolderModel.find({'belongsTo': 'sermon'});
            // @TO-DO: respond using the status code
            return series;
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: Could not get series data';
        };
    }

    async getFolderDetails(folderId) { // @TO-DO
        try {
            const folderDetails = await this.FolderModel.findById(folderId);
            if(folderDetails) {
                return folderDetails;
            } else {
                // @TO-DO: respond using the status code
                return 'Error: specified series not found';
            };
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: Caught on processing data';
        };
    }

    async getAllSermons() { // @TO-DO
        try {
            return await this.SermonModel.find({});
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: Could not get all sermons';
        }
    }

    async getSermon(sermonId, state) {
        try {
            const sermonDetails = await this.SermonModel.findById(sermonId);
            if(sermonDetails) {
                if (state == 'details') {
                    return sermonDetails;
                } else {
                    const listData = _lodash.pick(sermonDetails, ['_id', 'title', 'folderId', 'coverImg', 'stats']);
                    return listData;
                }
            } else {
                // @TO-DO: respond using the status code
                return 'Error: specified sermon not found';
            };
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: could not get data';
        };
    }

    async addSermon(data): Promise<string> { // @TO-DO
        try {
            let newSermon = await this.SermonModel.findOne({ 'title': data.title });

            if(newSermon) {
                return 'sermon title already exit';
            } else {
                newSermon = await new this.SermonModel(data);
            };

            const updateData = {
                files: [
                    {
                        fileId: newSermon._id,
                        duration: data.duration
                    }
                ]
            };

            const updateDataMeta = {
                folderId: mongoose.Types.ObjectId(newSermon.folderId),
                data: JSON.stringify(updateData)
            };

            const updateFolderRes = await this.updateFolder(updateDataMeta.folderId, JSON.parse(updateDataMeta.data), 'add');

            if (updateFolderRes === 'series updated successfully') { // await the status code
                await newSermon.save();
                // @TO-DO: respond using the status code
                return 'sermon created successfully';
            } else {
                // @TO-DO: respond using the status code
                return 'Error: error on processing creation sermon';
            }
        } catch (ex) {
            // @TO-DO: respond using the status code
            return 'Error: Could not create new sermon';
        };
    }

    async addFolder(data): Promise<string> { // @TO-DO
        try {
            let newSeries = await this.FolderModel.findOne({ 'title': data.title });

            if(newSeries) {
                return 'series title already exit';
            } else {
                newSeries = await new this.FolderModel(data).save();
            };

            // @TO-DO: respond using the status code
            return 'sermon series created successfully';
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: Could not create new sermon series';
        }
    }

    async updateSermon(id, data) { // @TO-DO
        try {
            const toUpdate = await this.SermonModel.findById(id);
            if (toUpdate) {
                const detailstoUpdate = _lodash.pick(data, [
                    'title', 'coverImg', 'folderId', 'audioUrl', 'details'
                ]);
                for(const item in detailstoUpdate) {
                    if (item == 'details') {
                        console.log('inside details block');
                        for (const detailsItems in detailstoUpdate.details) {
                            toUpdate.details[detailsItems] = detailstoUpdate.details[detailsItems];
                        }
                    } else {
                        if (item == 'title') {
                            const another = await this.SermonModel.findOne({ 'title': detailstoUpdate.title });
    
                            if(another) {
                                return 'sermon title already exit';
                            } else {
                                toUpdate[item] = detailstoUpdate[item];
                            };
                        } else {
                            toUpdate[item] = detailstoUpdate[item];
                        }
                    }
                };
                await toUpdate.save();
                // @TO-DO: respond using the status code
                return 'Updated sermon successfully';
            } else {
                // @TO-DO: respond using the status code
                return 'Error: Specified sermon not found';
            }
        } catch (ex) {
            // TO-DO: remove console
            console.log(ex);
            return 'Error: Could not update the sermon'; 
        }
    }

    async updateFolder(id, data, state) { // @TO-DO
        const toUpdate = await this.FolderModel.findById(id);
        if (toUpdate) {
            if (state === 'add') {
                const detailstoUpdate = _lodash.pick(data, ['title', 'coverImg', 'files']);
                for(const item in detailstoUpdate) {
                    if(item == 'files') {
                        for(const item of detailstoUpdate['files']) {
                            toUpdate['files'].push(item.fileId);
                            ++toUpdate['numberOfFiles'];
                            toUpdate['totalTime'] += item.duration;
                        };
                    } else {
                        if (item == 'title') {
                            const another = await this.FolderModel.findOne({ 'title': detailstoUpdate.title });
    
                            if(another) {
                                return 'series title already exit';
                            } else {
                                toUpdate[item] = detailstoUpdate[item];
                            };
                        } else {
                            toUpdate[item] = detailstoUpdate[item];
                        }
                    };
                };
            } else {
                for(const item of data['files']) {
                    toUpdate.files = toUpdate.files.filter(file => {
                        return file !== item.fileId;
                    });
                    toUpdate.totalTime -= item.duration;
                    --toUpdate.numberOfFiles;
                };
            }
            await toUpdate.save();
        } else {
            // @TO-DO: respond using the status code
            return 'Error: specified series not found';
        };
        // @TO-DO: respond using the status code
        return 'series updated successfully';
    }

    async deleteSermon(sermonId) { // @TO-DO
        try {
            const toDelete = await this.SermonModel.findById(sermonId);
            if(toDelete) {
                const deleteData = {
                    files: [
                        {
                            fileId: toDelete._id,
                            duration: toDelete.duration
                        }
                    ]
                };
                const deleteDataMeta = {
                    folderId: mongoose.Types.ObjectId(toDelete.folderId),
                    data: JSON.stringify(deleteData)
                };
                const deleteFolderRes = await this.updateFolder(deleteDataMeta.folderId, JSON.parse(deleteDataMeta.data), 'delete');
                if (deleteFolderRes === 'series updated successfully') { // await the status code
                    const delSermon = await this.SermonModel.findByIdAndRemove(sermonId);
                    if (delSermon) {
                        // @TO-DO: respond using the status code
                        return 'sermon deleted successfully';
                    } else {
                        /*
                        * at this point the err should be logged to the dashboard for feather checking to 
                            - add sermon_id back to the folder files and delete again
                            - delete the sermon that gave the err)
                            - can directly delete the sermon from db
                        */
                        // @TO-DO: respond using the status code
                        return 'Error: Could not delete sermon';
                    }
                } else {
                    // @TO-DO: respond using the status code
                    return 'Error: error on processing creation sermon';
                }
            } else {
                // @TO-DO: respond using the status code
                return 'Error: specified sermon not found';
            }
        } catch(ex) {
            // @TO-DO: respond using the status code
            return 'Error: Could not delete the specified sermon'
        }
    }

    async deleteSermonFolder(folderId) { // @TO-DO
        try {
            const toDelete = await this.FolderModel.findByIdAndRemove(folderId);
            if(toDelete) {
                // @TO-DO: respond using the status code
                return 'sermon series deleted succesfully';
            } else {
                // @TO-DO: respond using the status code
                return 'Error: specified series not found';
            }
        } catch(ex) {
             // @TO-DO: respond using the status code
             return 'Error: Could not delete the series;'
        }
    }
}
