import { combineReducers } from 'redux';

import cryptoReducer from './cryptoReducer';

const rootReducer = combineReducers({
  data: cryptoReducer,
});

export default rootReducer;
