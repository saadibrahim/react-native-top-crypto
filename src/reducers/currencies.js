import {
  FETCHED_CURRENCIES,
  CURRENCIES_FETCH_FAILED,
  CURRENCIES_FETCH_START,
} from '../actions/types';

const initialState = {
  data: [],
  fetching: true,
  error: undefined,
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCIES_FETCH_START:
      return {
        ...state,
        fetching: true,
        error: undefined,
        data: [],
      };
    case FETCHED_CURRENCIES:
      return {
        ...state,
        fetching: false,
        error: undefined,
        data: action.data,
      };
    case CURRENCIES_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
        data: [],
      };
    default:
      return state;
  }
};

export default currenciesReducer;
