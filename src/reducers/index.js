import { combineReducers } from 'redux';

// reducers
import formData from './formDataReducer';
import isLoading from './isLoadingReducer';

const rootReducer = combineReducers({
    formData,
    isLoading
});

export default rootReducer;
