// initial state
import initialState from '../initialState/initialState';
 
// fixtures
import { testErrorFormDataAction, testErrorFormState } from '../fixtures/form';

// reducer
import formError from './formErrorReducer';

describe('formErrorReducer', () => {
    it('should update formError state variable', () => {
        const formState = formError(initialState, testErrorFormDataAction);
        expect(formState).toEqual(testErrorFormState);
   });
});