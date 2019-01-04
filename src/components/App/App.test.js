import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store/store';

import App from './App';

it('renders without crashing', () => {
	shallow(<App store={store} />);
});
