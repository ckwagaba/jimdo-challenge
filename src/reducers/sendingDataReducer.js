import initialState from '../initialState/initialState';

import {
    SUBMIT_FORM_DATA_START
} from '../types';

const sendingData = (state=initialState, action) => {
    switch(action.type) {
        case SUBMIT_FORM_DATA_START:
            return {
                ...state,
                sendingData: !state.sendingData
            };
        default:
            return state;
    }
};

export default sendingData;