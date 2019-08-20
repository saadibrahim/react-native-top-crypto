import { currencyFormatter } from './numbers';

test('formats the price correctly', () => {
  const price = 1234.56;
  expect(currencyFormatter.format(price)).toBe('$1,234.56');
});
