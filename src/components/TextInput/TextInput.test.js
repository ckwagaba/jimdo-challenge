import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store/store';

import TextInput from './TextInput';

it('renders without crashing', () => {
  shallow(<TextInput store={store} />);
});
