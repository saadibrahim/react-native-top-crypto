import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from '../helpers/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('calls api.get', () => {
  const currenciesActions = require('./currencies');
  api.get = jest.fn(() => Promise.resolve());

  const store = mockStore({ currencies: {} });

  store.dispatch(currenciesActions.getCurrencies());
  expect(api.get).toHaveBeenCalled();
});
