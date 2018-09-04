import { combineReducers } from 'redux';

// reducers
import formData from './formDataReducer';

const rootReducer = combineReducers({
    formData
});

export default rootReducer;
