import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { NotFoundException, BadRequestException, InternalServerErrorException, CustomException } from '../shared/exceptions';

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
        
    async getFolders() {
        try {
            const series = await this.FolderModel.find({'belongsTo': 'sermon'});
            if (series.length > 0) {
                return series;
            } else {
                throw new NotFoundException('Series not found');
            };
        } catch(ex) {
            if(ex.response) {
                throw new NotFoundException(ex.response);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async getFolderDetails(folderId) { 
        // @TO-DO: update the folder details presenter not to contain the sermon list data
        try {
            if(!mongoose.Types.ObjectId.isValid(folderId)) {
                throw new BadRequestException('Invalid folder Id');
            };
            const folderDetails = await this.FolderModel.findById(folderId);
            if(folderDetails) {
                return folderDetails;
            } else {
                throw new NotFoundException('Specified series not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new InternalServerErrorException('Could not retrieve data');
            }
        };
    }

    async getAllSermons() {
        try {
            const sermons = await this.SermonModel.find({});
            if (sermons.length > 0) {
                return sermons;
            } else {
                throw new NotFoundException('Sermons not found');
            }
        } catch(ex) {
            if(ex.response) {
                throw new NotFoundException(ex.response);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        }
    }

    async getSermon(sermonId, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(sermonId)) {
                throw new BadRequestException('Invalid sermon Id');
            };
            const sermonDetails = await this.SermonModel.findById(sermonId);
            if(sermonDetails) {
                if (state == 'details') {
                    return sermonDetails;
                } else {
                    const listData = _lodash.pick(sermonDetails, ['_id', 'title', 'folderId', 'coverImg', 'stats']);
                    return listData;
                }
            } else {
                throw new NotFoundException('Specified sermon not found');
            };
        } catch(ex) {
            if(ex.response) {
                throw new NotFoundException(ex.response);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async addSermon(data): Promise<string> {
        try {
            let newSermon = await this.SermonModel.findOne({ 'title': data.title });

            if(newSermon) {
                throw new BadRequestException('Sermon already exit');
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
            // if there is any mistake on updating the series the the function will throuh its own error from the applicaiton
            if (updateFolderRes == 'series updated successfully') {
                await newSermon.save();
                return 'Sermon created successfully';
            } else {
                throw new InternalServerErrorException('Could not add sermon to series');
            }
        } catch (ex) {
            if (ex.response) {
                throw new BadRequestException(ex.response);
            } else {
                throw new BadRequestException(ex.errors.title.message);
            }
        };
    }

    async addFolder(data): Promise<string> {
        try {
            let newSeries = await this.FolderModel.findOne({ 'title': data.title });
            if(newSeries) {
                throw new BadRequestException('Series already exit');
            } else {
                newSeries = await new this.FolderModel(data).save();
            };
            return 'Series created successfully';
        } catch(ex) {
            if (ex.response) {
                throw new BadRequestException(ex.response);
            } else {
                throw new BadRequestException(ex.errors.title.message);
            }
        }
    }

    async updateSermon(sermonId, data) {
        try {
            if(!mongoose.Types.ObjectId.isValid(sermonId)) {
                throw new BadRequestException('Invalid sermon Id');
            };
            const toUpdate = await this.SermonModel.findById(sermonId);
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
                                throw new BadRequestException('Sermon already exit');
                            } else {
                                toUpdate[item] = detailstoUpdate[item];
                            };
                        } else {
                            toUpdate[item] = detailstoUpdate[item];
                        }
                    }
                };
                await toUpdate.save();
                return 'Updated sermon successfully';
            } else {
                throw new NotFoundException('Sermon not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not retrieve data');
            }
        }
    }

    async updateFolder(folderId, data, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(folderId)) {
                throw new BadRequestException('Invalid folder Id');
            };
            const toUpdate = await this.FolderModel.findById(folderId);
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
                                    throw new BadRequestException('Series already exit');
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
                return 'Sermon updated successfully';
            } else {
                throw new NotFoundException('Series not found');
            };
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not retrieve data');
            }
        };
    }

    async deleteSermon(sermonId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(sermonId)) {
                throw new BadRequestException('Invalid sermon Id');
            };
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
                // if there is any mistake on updating the series the the function will throuh its own error from the applicaiton
                if (deleteFolderRes === 'series updated successfully') {
                    const delSermon = await this.SermonModel.findByIdAndRemove(sermonId);
                    if (delSermon) {
                        return 'sermon deleted successfully';
                    } else {
                       throw new InternalServerErrorException('Could not delete sermon');
                    }
                } else {
                    throw new InternalServerErrorException('Could not remove sermon to series');
                }
            } else {
                throw new NotFoundException('Sermon not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not retrieve data');
            }
        }
    }

    async deleteSermonFolder(folderId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(folderId)) {
                throw new BadRequestException('Invalid folder Id');
            };
            const toDelete = await this.FolderModel.findByIdAndRemove(folderId);
            if(toDelete) {
                return 'Series deleted succesfully';
            } else {
                throw new NotFoundException('Series not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not retrieve data');
            }
        }
    }
}
