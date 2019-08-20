import currenciesReducer from './currencies';
import { FETCHED_CURRENCIES } from '../actions/types';

describe('currenciesReducer', () => {
  describe('initialState', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = {
        data: [],
        fetching: true,
        error: undefined,
      };

      expect(currenciesReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('FETCHED_CURRENCIES', () => {
    test('returns the correct state', () => {
      const action = { type: FETCHED_CURRENCIES, data: [1, 2] };
      const expectedState = {
        data: [1, 2],
        fetching: false,
        error: undefined,
      };

      expect(currenciesReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
