import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { 
    NotFoundException,
    BadRequestException,
    CustomException,
    InternalServerErrorException
} from '../shared/exceptions';

import * as mongoose from 'mongoose';
import * as _lodash from 'lodash';

import { Feed } from './schema/feeds.interface';

import { feedDetails } from '../../demo-database/resources(all are tables)/feeds-data';

@Injectable()
export class FeedsService {
    constructor(
        @Inject('FEEDS_MODEL')
        private feedsModel: Model<Feed>,
    ) { }

    async getFeeds(pageNumber) {
        try {
            const feeds = await this.feedsModel.find({});
            if (feeds.length > 0) {
                return feeds;
            } else {
                throw new NotFoundException('Feeds not found');
            }
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        }
    }

    async getFeedDetails(feedId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(feedId)) {
                throw new BadRequestException('Invalid feeds Id');
            };
            const feedsDetails = await this.feedsModel.findById(feedId);
            if(feedsDetails) {
                return feedsDetails;
            } else {
                throw new NotFoundException('Specified feed not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new InternalServerErrorException('Could not retrieve data');
            }
        };
    }

    async addFeed(data) {
        try {
            let newFeed = await this.feedsModel.findOne({ 'title': data.title });
            if(newFeed) {
                throw new BadRequestException('Feed already exit');
            } else {
                newFeed = await new this.feedsModel(data);
                await newFeed.save();
                return 'Feed created successfully';
            }
        } catch(ex) {
            if (ex.message) {
                throw new BadRequestException(ex.message);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add feed');
            }
        }
    }

    async updateFeed(feedId, data) {
        try {
            if(!mongoose.Types.ObjectId.isValid(feedId)) {
                throw new BadRequestException('Invalid feed Id');
            };
            const toUpdate = await this.feedsModel.findById(feedId);
            if (toUpdate) {
                const possibleUpdates = _lodash.pick(data, ['title', 'coverImg', 'details']);
                for(const item in possibleUpdates) {
                    if (item == 'details') {
                        for (const detailsItems in possibleUpdates.details) {
                            toUpdate.details[detailsItems] = possibleUpdates.details[detailsItems];
                        }
                    } else {
                        if (item == 'title') {
                            const another = await this.feedsModel.findOne({ 'title': possibleUpdates.title });
                            if(another) {
                                throw new BadRequestException('Feed already exit');
                            } else {
                                toUpdate[item] = possibleUpdates[item];
                            };
                        } else {
                            toUpdate[item] = possibleUpdates[item];
                        }
                    }
                }
                await toUpdate.save();
                return 'Feed updated successfully';
            } else {
                throw new NotFoundException('Feed not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update feed');
            }
        }
    }

    async deleteFeed(feedId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(feedId)) {
                throw new BadRequestException('Invalid feed Id');
            };
            const toDelete = await this.feedsModel.findById(feedId);
            if(toDelete) {
                await toDelete.remove();
                return 'Feed deleted successfully';
            } else {
                throw new InternalServerErrorException('Feed not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete sermon');
            }
        }
    }
}
