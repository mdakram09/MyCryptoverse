import { ActionTypes } from '../constants/actionTypes';

export const setGlobalStats = (stats) => {
  return {
    type: ActionTypes.FETCH_GLOBAL_STATS_START,
    payload: stats,
  };
};

export const selectedGlobalStats = (stats) => {
  return {
    type: ActionTypes.FETCH_GLOBAL_STATS_SUCCESS,
    payload: stats,
  };
};
export const failedGlobalStats = () => {
  return {
    type: ActionTypes.FETCH_GLOBAL_STATS_FAIL,
  };
};
