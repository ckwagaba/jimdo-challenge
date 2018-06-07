import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

const formData = (state=initialState, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_SUCCESS:
            return {
                formData: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};

export default formData;