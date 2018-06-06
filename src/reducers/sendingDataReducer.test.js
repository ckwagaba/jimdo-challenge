// initial state
import initialState from '../initialState/initialState';
 
// fixtures
import { testSendingFormDataAction, testSendingFormState } from '../fixtures/form';

// reducer
import sendingData from './sendingDataReducer';

describe('formErrorReducer', () => {
    it('should update sendingData state variable', () => {
        const formState = sendingData(initialState, testSendingFormDataAction);
        expect(formState).toEqual(testSendingFormState);
   });
});