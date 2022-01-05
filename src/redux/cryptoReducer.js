import * as types from './actionTypes';

const initialState = {
  stats: [],
  error: null,
  loading: false,
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GLOBAL_STATS_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_GLOBAL_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        stats: action.payload,
      };
    case types.FETCH_GLOBAL_STATS_FAILFETCH_GLOBAL_STATS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
