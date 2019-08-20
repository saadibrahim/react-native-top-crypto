import { combineReducers } from 'redux';
import currencies from './currencies';

const rootReducer = combineReducers({
  currencies,
});

export default rootReducer;
