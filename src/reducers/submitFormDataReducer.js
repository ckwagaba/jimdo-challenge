import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_REQUEST
} from '../types';

const isLoading = (state=initialState.isLoading, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_REQUEST:
            return !state;
        default:
            return state;
    }
};

export default isLoading;