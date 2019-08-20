import api from '../helpers/api';
import { FETCHED_CURRENCIES, CURRENCIES_FETCH_FAILED, CURRENCIES_FETCH_START } from './types';

export const getCurrencies = () => {
  return dispatch => {
    dispatch({ type: CURRENCIES_FETCH_START });
    api
      .get('cryptocurrency/listings/latest', {
        limit: 10,
      })
      .then(response => {
        if (response.ok) {
          if (response.data) {
            dispatch({ type: FETCHED_CURRENCIES, data: response.data.data });
          } else {
            dispatch({
              type: CURRENCIES_FETCH_FAILED,
              error: "Couldn'nt load currencies",
            });
          }
        } else {
          const err = response.status === 404 ? 'API error.' : response.problem;
          dispatch({ type: CURRENCIES_FETCH_FAILED, error: err });
        }
      });
  };
};
