import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// action types
import {
    SUBMIT_FORM_DATA_SUCCESS
} from '../types';

// fixtures
import { testFormData, testSuccessFormDataAction } from '../fixtures/formData';

// actions
import { submitFormData } from './submitFormData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitFormData action', () => {
    it('should dispatch SUBMIT_FORM_DATA_SUCCESS action after a successful timeout', async () => {
        const store = mockStore({});
        
        const expectedAction = [
            testSuccessFormDataAction
        ];
        
        const action = await submitFormData(testFormData);
        store.dispatch(action);
        expect(store.getActions()).toEqual(expectedAction);
    });
});