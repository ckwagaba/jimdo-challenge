// action types
import {
    SUBMIT_FORM_DATA_REQUEST,
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

// success response data
export const testFormData = {
  name: 'Collins Wagaba',
  email: 'ckwagaba@gmail.com',
  message: 'Bringing awesomeness to Jimdo.'
};

// request action dispatched
export const testRequestFormDataAction = {
  type: SUBMIT_FORM_DATA_REQUEST
};

// success action dispatched
export const testSuccessFormDataAction = {
  type: SUBMIT_FORM_DATA_SUCCESS,
  payload: testFormData
};

// request state
export const testRequestFormState = {
  formData: {
    name: '',
    email: '',
    message: ''
  },
  isLoading: true
};

// success state
export const testSuccessFormState = {
  formData: {
    name: 'Collins Wagaba',
    email: 'ckwagaba@gmail.com',
    message: 'Bringing awesomeness to Jimdo.'
  },
  isLoading: false
};