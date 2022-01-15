import { combineReducers } from 'redux';
import {
  setGlobalStatsReducer,
  selectedGlobalStatsReducer,
} from './cryptoReducer';
const reducers = combineReducers({
  globalStats: setGlobalStatsReducer,
  selectedGlobalStats: selectedGlobalStatsReducer,
});
export default reducers;
