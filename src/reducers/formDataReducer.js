import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

const formData = (state=initialState, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_SUCCESS:
            return {
                ...state,
                formData: action.payload
            };
        default:
            return state;
    }
};

export default formData;