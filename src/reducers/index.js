import { combineReducers } from 'redux';

// reducers
import formData from './formDataReducer';
import sendingData from './sendingDataReducer';
import formError from './formErrorReducer';

const rootReducer = combineReducers({
    formData,
    sendingData,
    formError
});

export default rootReducer;
