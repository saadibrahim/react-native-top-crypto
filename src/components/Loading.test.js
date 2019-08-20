import React from 'react';
import renderer from 'react-test-renderer';

import Loading from './Loading';

test('renders the Navbar using Snapshots', () => {
  const component = renderer.create(<Loading />);
  expect(component).toMatchSnapshot();
});
