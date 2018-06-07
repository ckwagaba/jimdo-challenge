import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_REQUEST
} from '../types';

const isLoading = (state=initialState, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};

export default isLoading;