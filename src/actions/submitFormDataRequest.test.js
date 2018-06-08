import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// action types
import {
    SUBMIT_FORM_DATA_REQUEST
} from '../types';

// fixtures
import { testRequestFormDataAction } from '../fixtures/formData';

// actions
import { submitFormDataRequest } from './submitFormDataRequest';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitFormData action', () => {
    it('should dispatch SUBMIT_FORM_DATA_REQUEST when form is being submitted', () => {
        const store = mockStore({});
        
        store.dispatch(submitFormDataRequest());
        expect(store.getActions()[0]).toEqual(testRequestFormDataAction);
    });
});