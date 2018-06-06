// initial state
import initialState from '../initialState/initialState';
 
// fixtures
import { testSuccessFormDataAction, testNewFormState } from '../fixtures/formData';

// reducer
import formData from './formDataReducer';

describe('formDataReducer', () => {
    it('should update formData state variable', () => {
        const formState = formData(initialState, testSuccessFormDataAction);
        expect(formState).toEqual(testNewFormState);
   });
});