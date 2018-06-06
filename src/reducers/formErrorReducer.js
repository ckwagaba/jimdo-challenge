import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_ERROR
} from '../types';

const formError = (state=initialState, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_ERROR:
            return {
                ...state,
                formError: !state.formError
            };
        default:
            return state;
    }
};

export default formError;