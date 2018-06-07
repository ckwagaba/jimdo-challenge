// initial state
import initialState from '../initialState/initialState';
 
// fixtures
import { testRequestFormDataAction, testRequestFormState } from '../fixtures/formData';

// reducer
import isLoading from './isLoadingReducer';

describe('formDataReducer', () => {
    it('should update formData state variable', () => {
        const formState = isLoading(initialState, testRequestFormDataAction);
        expect(formState).toEqual(testRequestFormState);
   });
});