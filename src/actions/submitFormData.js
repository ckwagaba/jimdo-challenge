// action types
import {
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

// fixtures
import { testFormData } from '../fixtures/formData';

/**
 * @function thunk
 * dispatches action after timeout
 */
export const submitFormData = (formData) => {
    return new Promise((dispatch) => {
        setTimeout(() => {
            dispatch(submitFormDataSuccess(testFormData));
        }, 1000);
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