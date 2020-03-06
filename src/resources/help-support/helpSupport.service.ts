import { Injectable } from '@nestjs/common';

import { 
   usersFeedbacks, 
   userFeedbackDetails, 
   suggestions, 
   suggestionDetails, 
   faqs, 
   faqDetails
} from '../../demo-database/resources(all are tables)/helpSupport-data';

@Injectable()
export class HelpSupportService {
  // User Feedback
  getUsersFeedbacks() {
    return usersFeedbacks;
  }  

  getUserFeedback(id) {
    return userFeedbackDetails;
  }

  deleteFeedback(id) {
    return 'feedback deleted successfully';
  }

  // SuggestedFeatures
  getSuggestedFeatures() {
    return suggestions;
  } 

  getSuggestedFeature(id) {
    return suggestionDetails
  } 

  deleteSuggestFeature(id) {
    return 'SuggestFeature deleted successfully';
  }

  // Faqs
  getFaqs() {
    return faqs;
  }  

  getFaq(id) {
    return faqDetails;
  }

  addFaq(data) {
    return ['faq posted successfully', data];
  }

  updateFaq(id, data) {
    return ['faq updated successfully', data];
  }

  deleteFaq(id) {
    return 'Faq deleted successfully';
  }
}
