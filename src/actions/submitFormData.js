// action types
import {
    SUBMIT_FORM_DATA_ERROR,
    SUBMIT_FORM_DATA_START,
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

const submitFormData = (formData) => {
    return ((dispatch) => {
        
    });
};

/**
 * @function
 * returns action to be dispatched on success
 */ 
const submitFormDataSuccess = (responseFormData) => {
    return {
      type: SUBMIT_FORM_DATA_SUCCESS,
      payload: responseFormData
    };
};

export default submitFormData;