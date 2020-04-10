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

import { Faq } from './schema/help-support.interface';

import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';

@Injectable()
export class HelpSupportService {
  constructor(
      @Inject('HELP_SUPPORT_MODEL')
      private helpSupportsModel: Model<Faq>,
      private adminNotificationService: DhbNotificationService,
  ) { }
    
  // User Feedback
  async getUsersFeedbacks(pageNumber) {
    try {
      const perPage = 10;
      const page = pageNumber ? pageNumber : 1;
      const feedback = await this.helpSupportsModel
        .find({'type':'feedback'}).skip((perPage * page) - perPage).limit(perPage);
      if (feedback.length > 0) {
        return feedback;
      } else {
          throw new NotFoundException('Feedback not found');
      }
    } catch(ex) {
      if(ex.message) {
        throw new NotFoundException(ex.message);
      } else {
          throw new BadRequestException('Could not retrieve data');
      };
    }
  }

  // SuggestedFeatures
  async getSuggestedFeatures(pageNumber) {
    try {
      const perPage = 10;
      const page = pageNumber ? pageNumber : 1;
      const SuggestedFeature = await this.helpSupportsModel
        .find({'type':'feature'}).skip((perPage * page) - perPage).limit(perPage);
        if (SuggestedFeature.length > 0) {
          return SuggestedFeature;
        } else {
            throw new NotFoundException('Suggested feature not found');
        }
    } catch(ex) {
      if(ex.message) {
        throw new NotFoundException(ex.message);
      } else {
          throw new BadRequestException('Could not retrieve data');
      };
    }
  }

  // Faqs
  async getFaqs(pageNumber) {
    try {
      const perPage = 10;
      const page = pageNumber ? pageNumber : 1;
      const faqs = await this.helpSupportsModel
        .find({'type':'faq'}).skip((perPage * page) - perPage).limit(perPage);
        if (faqs.length > 0) {
          return faqs;
        } else {
            throw new NotFoundException('Faqs not found');
        }
    } catch(ex) {
      if(ex.message) {
        throw new NotFoundException(ex.message);
      } else {
          throw new BadRequestException('Could not retrieve data');
      };
    }
  }

  async addFaq(data) {
    try {
      let newFaq = await this.helpSupportsModel.findOne({ 'title': data.title });
      if(newFaq) {
          throw new BadRequestException('Faq already exit');
      } else {
          newFaq = await new this.helpSupportsModel(data);
          await newFaq.save();
           // add notification to database
           const notificationData = {
              // test admin user, this is creating the sermon from his point to create notification for all 
              // other admin members in the sermon notes group to see
              userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
              action: 'Posted FAQ',
              title: newFaq.title,
              group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
            };
            this.adminNotificationService.addNotification(notificationData);
            return 'Faq created successfully';
      }
    } catch(ex) {
        if (ex.message) {
            throw new BadRequestException(ex.message);
        } else {
            console.log(ex.message);
            throw new BadRequestException('Could not add Faq');
        }
    }
  }

  async updateFaq(faqId, data) {
    try {
      if(!mongoose.Types.ObjectId.isValid(faqId)) {
          throw new BadRequestException('Invalid faq Id');
      };
      const toUpdate = await this.helpSupportsModel.findById(faqId);
      if (toUpdate) {
          const possibleUpdates = _lodash.pick(data, ['title', 'desc', 'content', 'media']);
          for(const item in possibleUpdates) {
            toUpdate[item] = possibleUpdates[item];
          }
          await toUpdate.save();
           // add notification to database
           const notificationData = {
              // test admin user, this is creating the sermon from his point to create notification for all 
              // other admin members in the sermon notes group to see
              userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
              action: 'Updated FAQ',
              title: toUpdate.title,
              group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
            };
            this.adminNotificationService.addNotification(notificationData);
            return 'Faq updated successfully';
        } else {
            throw new NotFoundException('faq not found');
        }
      } catch(ex) {
          if (ex.message) {
              throw new CustomException(ex.message, ex.status);
          } else {
              throw new BadRequestException('Could not update faq');
          }
      }
  }

  async deleteEntity(faqId) {
    try {
      if(!mongoose.Types.ObjectId.isValid(faqId)) {
          throw new BadRequestException('Invalid entity Id');
      };
      const toDelete = await this.helpSupportsModel.findById(faqId);
      if(toDelete) {
          await toDelete.remove();
           // add notification to database
           const notificationData = {
            // test admin user, this is creating the sermon from his point to create notification for all 
            // other admin members in the sermon notes group to see
            userId: '5e837091d245d142b8d92e2a', // this will come from the auth-middleware
            action: 'Deleted FAQ',
            title: toDelete.title,
            group: 'basic admin' // this is the group the user is performing from -- data will come from the middleware
          };
          this.adminNotificationService.addNotification(notificationData);
          return 'Entity deleted successfully';
      } else {
          throw new InternalServerErrorException('Entity not found');
      }
    } catch (ex) {
        if (ex.message) {
            throw new CustomException(ex.message, ex.status);
        } else {
            throw new BadRequestException('Could not delete entity');
        }
      }
  }
  
}
