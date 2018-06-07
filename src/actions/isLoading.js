// action types
import {
    SUBMIT_FORM_DATA_REQUEST
} from '../types';

/**
 * @function async
 * dispatch action to update state showing that the form is being submitted
 */
export const isLoading = () => {
    return new Promise((dispatch) => {
        dispatch(submitFormDataRequest());
    });
};

/**
 * @function - action creator
 * returns action to be dispatched when form is being submitted
 */ 
const submitFormDataRequest = () => {
    return {
      type: SUBMIT_FORM_DATA_REQUEST
    };
};

export default isLoading;