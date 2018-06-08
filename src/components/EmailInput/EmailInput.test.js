import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store/store';

import EmailInput from './EmailInput';

it('renders without crashing', () => {
  shallow(<EmailInput store={store} />);
});
