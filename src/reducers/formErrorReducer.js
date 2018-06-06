import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_ERROR
} from '../types';

const formError = (state=initialState.formError, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_ERROR:
            return !state;
        default:
            return state;
    }
};

export default formError;