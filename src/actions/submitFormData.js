// action types
import {
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

/**
 * @function async
 * dispatches action after timeout
 */
export const submitFormData = (formData) => {
    return new Promise((resolve) => {
        // simulate API call
        setTimeout(() => {
            resolve(submitFormDataSuccess(formData));
        }, 3000);
    });
};

/**
 * @function - action creator
 * returns action to be dispatched on success
 */ 
const submitFormDataSuccess = (responseFormData) => {
    return {
      type: SUBMIT_FORM_DATA_SUCCESS,
      payload: responseFormData
    };
};

export default submitFormData;