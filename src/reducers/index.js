import { combineReducers } from 'redux';

// reducers
import formData from './formDataReducer';
import isLoading from './submitFormDataReducer';

const rootReducer = combineReducers({
    formData,
    isLoading
});

export default rootReducer;
