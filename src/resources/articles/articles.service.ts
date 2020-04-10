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

import { Article } from './schema/article.interface';
import { Folder } from '../shared/schemas/folder.interface';

import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';

@Injectable()
export class ArticlesService {
    constructor(
        @Inject('ARTICLE_MODEL')
        private ArticleModel: Model<Article>,
        @Inject('FOLDER_MODEL')
        private FolderModel: Model<Folder>,
        private adminNotificationService: DhbNotificationService,
    ) {}

    async getAccounts(pageNumber) {
        try {
            const perPage = 10;
            const page = pageNumber ? pageNumber : 1;
            const account = await this.FolderModel
                .find({'belongsTo': 'article'}).skip((perPage * page) - perPage).limit(perPage);
            if (account.length > 0) {
                return account;
            } else {
                throw new NotFoundException('Account not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }

    async getAccountDetails(accountId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(accountId)) {
                throw new BadRequestException('Invalid account Id');
            };
            const accountDetails = await this.FolderModel.findById(accountId);
            if(accountDetails) {
                return accountDetails;
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

    async getAllArticles(pageNumber) {
        try {
            const perPage = 10;
            const page = pageNumber ? pageNumber : 1;
            const articles = await this.ArticleModel
                .find({}).skip((perPage * page) - perPage).limit(perPage);
            if (articles.length > 0) {
                const articlesList = [];
                articles.forEach(article => {
                    const listData = _lodash.pick(article, ['_id', 'title', 'accountId', 'coverImg', 'details.desc', 'details.autuorId', 'stats', 'commentsData.totalCmts', 'messagesData.totalMsgs']);
                    articlesList.push(listData);
                });
                return articlesList;
            } else {
                throw new NotFoundException('Articles not found');
            }
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        }
    }

    async getArticle(articleId, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(articleId)) {
                throw new BadRequestException('Invalid article Id');
            };
            const articleDetails = await this.ArticleModel.findById(articleId);
            if(articleDetails) {
                if (state == 'details') {
                    return articleDetails;
                } else {
                    const listData = _lodash.pick(articleDetails, ['_id', 'title', 'accountId', 'coverImg', 'details.desc', 'stats']);
                    return listData;
                }
            } else {
                throw new NotFoundException('Specified article not found');
            };
        } catch(ex) {
            if(ex.message) {
                throw new NotFoundException(ex.message);
            } else {
                throw new BadRequestException('Could not retrieve data');
            };
        };
    }


    async addArticle(data): Promise<string> {
        try {
            let newArticle = await this.ArticleModel.findOne({ 'title': data.title });
            if(newArticle) {
                throw new BadRequestException('Article already exit');
            } else {
                newArticle = await new this.ArticleModel(data);
            };
            const updateData = {
                files: [
                    {
                        fileId: newArticle._id
                    }
                ]
            };
            const updateDataMeta = {
                accountId: mongoose.Types.ObjectId(newArticle.accountId),
                data: JSON.stringify(updateData)
            };
            const updateSeriesRes = await this.updateAccount(updateDataMeta.accountId, JSON.parse(updateDataMeta.data), 'add');
            if (updateSeriesRes == 'account updated successfully') {
                await newArticle.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Posted article',
                    title: newArticle.title,
                    group: 'sermon notes' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Article created successfully';
            } else {
                throw new InternalServerErrorException('Could not add article to acount');
            }
        } catch (ex) {
            if (ex.message) {
                throw new BadRequestException(ex.message);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add article');
            }
        };
    }


    async addAccount(data): Promise<string> {
        try {
            let newAccount = await this.FolderModel.findOne({ 'title': data.title });
            if(newAccount) {
                throw new BadRequestException('Account already exit');
            } else {
                newAccount = await new this.FolderModel(data);
                await newAccount.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Added article account',
                    title: newAccount.title,
                    group: 'sermon notes' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Account created successfully';
            };
        } catch(ex) {
            if (ex.response) {
                throw new BadRequestException(ex.response);
            } else {
                console.log(ex.message);
                throw new BadRequestException('Could not add new article account');
            }
        }
    }

    async updateArticle(articleId, data) {
        try {
            if(!mongoose.Types.ObjectId.isValid(articleId)) {
                throw new BadRequestException('Invalid article Id');
            };
            const toUpdate = await this.ArticleModel.findById(articleId);
            if (toUpdate) {
                const possibleUpdates = _lodash.pick(data, [
                    'title', 'coverImg', 'details'
                ]);
                for(const item in possibleUpdates) {
                    if (item == 'details') {
                        for (const detailsItems in possibleUpdates.details) {
                            toUpdate.details[detailsItems] = possibleUpdates.details[detailsItems];
                        }
                    } else {
                        if (item == 'title') {
                            const another = await this.ArticleModel.findOne({ 'title': possibleUpdates.title });
                            if(another) {
                                throw new BadRequestException('Article already exit');
                            } else {
                                toUpdate[item] = possibleUpdates[item];
                            };
                        } else {
                            toUpdate[item] = possibleUpdates[item];
                        }
                    }
                };
                await toUpdate.save();
                // add notification to database
                const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Updated article',
                    title: toUpdate.title,
                    group: 'sermon notes' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Article updated successfully';
            } else {
                throw new NotFoundException('Article not found');
            }
        } catch (ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update article');
            }
        }
    }

    async updateAccount(accountId, data, state) {
        try {
            if(!mongoose.Types.ObjectId.isValid(accountId)) {
                throw new BadRequestException('Invalid account Id');
            };
            const toUpdate = await this.FolderModel.findById(accountId);
            if (toUpdate) {
                if (state == 'add') {
                    const possibleUpdates = _lodash.pick(data, ['title', 'coverImg', 'files', 'desc']);
                    for(const item in possibleUpdates) {
                        if(item == 'files') {
                            for(const item of possibleUpdates['files']) {
                                toUpdate['files'].push(item.fileId);
                                ++toUpdate['numberOfFiles'];
                            };
                        } else {
                            if (item == 'title') {
                                const another = await this.FolderModel.findOne({ 'title': possibleUpdates.title });
        
                                if(another) {
                                    throw new BadRequestException('account already exit');
                                } else {
                                    toUpdate[item] = possibleUpdates[item];
                                };
                            } else {
                                toUpdate[item] = possibleUpdates[item];
                            }
                        };
                    };
                } else {
                    for(const item of data['files']) {
                        toUpdate.files = toUpdate.files.filter(file => {
                            return file !== item.fileId;
                        });
                        --toUpdate.numberOfFiles;
                    };
                }
                await toUpdate.save();
                return 'account updated successfully';
            } else {
                throw new NotFoundException('account not found');
            };
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not update article account');
            }
        };
    }

    async deleteArticle(articleId) {
        try {
            if(!mongoose.Types.ObjectId.isValid(articleId)) {
                throw new BadRequestException('Invalid article Id');
            };
            const toDelete = await this.ArticleModel.findById(articleId);
            if(toDelete) {
                const deleteData = {
                    files: [
                        {
                            fileId: toDelete._id
                        }
                    ]
                };
                const deleteDataMeta = {
                    seriesId: mongoose.Types.ObjectId(toDelete.accountId),
                    data: JSON.stringify(deleteData)
                };
                const deleteArticleRes = await this.updateAccount(deleteDataMeta.seriesId, JSON.parse(deleteDataMeta.data), 'delete');
                if (deleteArticleRes === 'account updated successfully') {
                    const delArticle = await this.ArticleModel.findByIdAndRemove(articleId);
                    if (delArticle) {
                         // add notification to database
                        const notificationData = {
                            // test admin user, this is creating the sermon from his point to create notification for all 
                            // other admin members in the sermon notes group to see
                            userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                            action: 'Deleted article',
                            title: delArticle.title,
                            group: 'sermon notes' // this is the group the user is performing from -- data will come from the middleware
                        };
                        this.adminNotificationService.addNotification(notificationData);
                        return 'article deleted successfully';
                    } else {
                       throw new InternalServerErrorException('Could not delete article');
                    }
                } else {
                    throw new InternalServerErrorException('Could not remove article from account');
                }
            } else {
                throw new NotFoundException('Article not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete article');
            }
        }
    }

    async deleteAccount(accountId): Promise<string> {
        try {
            if(!mongoose.Types.ObjectId.isValid(accountId)) {
                throw new BadRequestException('Invalid account Id');
            };
            const toDelete = await this.FolderModel.findById(accountId);
            if(toDelete) {
                if (toDelete.files.length > 0) {
                    toDelete.files.forEach(async file => {
                        const fileId = mongoose.Types.ObjectId(file);
                        const deleteFile = await this.ArticleModel.findByIdAndRemove(fileId);
                        if(!deleteFile) {
                            throw new InternalServerErrorException('Could not delete all account articles');
                        };
                    });
                };
                await toDelete.remove();
                 // add notification to database
                 const notificationData = {
                    // test admin user, this is creating the sermon from his point to create notification for all 
                    // other admin members in the sermon notes group to see
                    userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
                    action: 'Deleted article account',
                    title: toDelete.title,
                    group: 'sermon notes' // this is the group the user is performing from -- data will come from the middleware
                };
                this.adminNotificationService.addNotification(notificationData);
                return 'Account deleted succesfully';             
            } else {
                throw new NotFoundException('Account not found');
            }
        } catch(ex) {
            if (ex.message) {
                throw new CustomException(ex.message, ex.status);
            } else {
                throw new BadRequestException('Could not delete article account');
            }
        }
    }

}
