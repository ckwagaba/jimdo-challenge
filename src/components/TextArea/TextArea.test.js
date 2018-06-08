import React from 'react';
import { shallow } from 'enzyme';

import store from '../../store/store';

import TextArea from './TextArea';

it('renders without crashing', () => {
  shallow(<TextArea store={store} />);
});
