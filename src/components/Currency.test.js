import React from 'react';
import renderer from 'react-test-renderer';

import Currency from './Currency';

const currency = {
  symbol: 'BTC',
  name: 'Bitcoin',
  quote: {
    USD: {
      price: 10000,
      market_cap: 1000000,
      percent_change_24h: -1.11,
    },
  },
};

test('renders the Currency using Snapshots', () => {
  const component = renderer.create(<Currency currency={currency} index={1} />);
  expect(component).toMatchSnapshot();
});
