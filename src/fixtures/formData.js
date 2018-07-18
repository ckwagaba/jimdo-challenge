// action types
import {
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

// success response data
export const testFormData = {
  name: 'Collins Wagaba',
  email: 'ckwagaba@gmail.com',
  message: 'Bringing awesomeness to Jimdo.'
};

// success action dispatched
export const testSuccessFormDataAction = {
  type: SUBMIT_FORM_DATA_SUCCESS,
  payload: testFormData
};

// success state
export const testSuccessFormState = {
  ...testFormData
};
