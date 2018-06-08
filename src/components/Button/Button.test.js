import React from 'react';
import { shallow, mount } from 'enzyme';

import store from '../../store/store';

import Button from './Button';

describe('<Button />', () => {
    it('renders without crashing', () => {
      shallow(<Button store={store} />);
    });
    
    it('calls prop function to handle data submission', () => {
        const mockHandler = jest.fn();
        const wrapper = mount(<Button store={store} handleFormSubmission={mockHandler} />);
        wrapper.find('button').simulate('click');
        expect(mockHandler.mock.calls.length).toEqual(1);
    });
});
