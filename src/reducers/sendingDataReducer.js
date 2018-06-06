import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_START
} from '../types';

const sendingData = (state=initialState.sendingData, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_START:
            return !state;
        default:
            return state;
    }
};

export default sendingData;