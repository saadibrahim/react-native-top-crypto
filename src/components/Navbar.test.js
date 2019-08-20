import React from 'react';
import renderer from 'react-test-renderer';

import Navbar from './Navbar';

test('renders the Navbar using Snapshots', () => {
  const component = renderer.create(<Navbar text="Test" />);
  expect(component).toMatchSnapshot();
});
