import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store/store';

import Avatar from './Avatar';

it('renders without crashing', () => {
  shallow(<Avatar store={store} />);
});
