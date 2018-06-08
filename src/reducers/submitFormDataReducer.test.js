// initial state
import initialState from '../initialState/initialState';
 
// fixtures
import { testRequestFormDataAction } from '../fixtures/formData';

// reducer
import isLoading from './submitFormDataReducer';

describe('formDataReducer', () => {
    it('should update isLoading state variable', () => {
        const isLoadingState = isLoading(initialState.isLoading, testRequestFormDataAction);
        expect(isLoadingState).toEqual(!initialState.isLoading);
   });
});