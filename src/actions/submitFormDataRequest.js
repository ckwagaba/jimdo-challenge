// action types
import {
    SUBMIT_FORM_DATA_REQUEST
} from '../types';

/**
 * @function - action creator
 * dispatch action to update state showing that the form is being submitted
 */ 
export const submitFormDataRequest = () => {
    return {
      type: SUBMIT_FORM_DATA_REQUEST
    };
};

export default submitFormDataRequest;