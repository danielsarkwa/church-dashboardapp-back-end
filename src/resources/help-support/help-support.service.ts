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

@Injectable()
export class HelpSupportService {
  constructor(
      @Inject('HELP_SUPPORT_MODEL')
      private helpSupportsModel: Model<Faq>,
  ) { }
    
  // User Feedback
  async getUsersFeedbacks(pageNumber) {
    try {
      const feedback = await this.helpSupportsModel.find({'type':'feedback'});
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
      const SuggestedFeature = await this.helpSupportsModel.find({'type':'feature'});
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
      const faqs = await this.helpSupportsModel.find({'type':'faq'});
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
