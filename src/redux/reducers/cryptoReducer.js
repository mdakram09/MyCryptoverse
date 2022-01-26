import { ActionTypes } from '../constants/actionTypes';
const intialState = {
  myStats: [
    {
      totalCryptocurrencies: 1299,
      totalExchanges: 355,
      totalMarketCap: 2.99,
    },
  ],
};

export const setGlobalStatsReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_GLOBAL_STATS_START:
      return { ...state, stats: payload };
    default:
      return state;
  }
};

export const selectedGlobalStatsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.FETCH_GLOBAL_STATS_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.FETCH_GLOBAL_STATS_FAIL:
      return {};
    default:
      return state;
  }
};
