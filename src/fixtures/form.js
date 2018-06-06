// action types
import {
    SUBMIT_FORM_DATA_ERROR,
    SUBMIT_FORM_DATA_START,
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

// success response data
const testFormData = {
  name: 'Collins Wagaba',
  email: 'ckwagaba@gmail.com',
  message: 'Bringing awesomeness to Jimdo.'
};

// sending data action dispatched
export const testSendingFormDataAction = {
  type: SUBMIT_FORM_DATA_START
};

// success action dispatched
export const testSuccessFormDataAction = {
  type: SUBMIT_FORM_DATA_SUCCESS,
  payload: testFormData
};

// error action dispatched
export const testErrorFormDataAction = {
  type: SUBMIT_FORM_DATA_ERROR
};

// state when form is being sent
export const testSendingFormState = {
  formData: {
    name: '',
    email: '',
    message: ''
  },
  sendingData: true,
  formError: false
};

// new state
export const testNewFormState = {
  formData: {
    name: 'Collins Wagaba',
    email: 'ckwagaba@gmail.com',
    message: 'Bringing awesomeness to Jimdo.'
  },
  sendingData: false,
  formError: false
};

// state when there is an error in the response
export const testErrorFormState = {
  formData: {
    name: '',
    email: '',
    message: ''
  },
  sendingData: false,
  formError: true
};