import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store/store';

import Button from './Button';

it('renders without crashing', () => {
  shallow(<Button store={store} />);
});
