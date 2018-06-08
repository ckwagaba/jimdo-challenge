// initial state
import initialState from '../initialState/initialState';
 
// fixtures
import { testSuccessFormDataAction, testSuccessFormState } from '../fixtures/formData';

// reducer
import formData from './formDataReducer';

describe('formDataReducer', () => {
    it('should update formData state variable', () => {
        const formDataState = formData(initialState, testSuccessFormDataAction);
        expect(formDataState).toEqual(testSuccessFormState);
   });
});