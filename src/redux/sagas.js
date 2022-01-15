import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import * as types from './actionTypes';
import { cryptoApi } from './cryptoAPI';

export function* onLoadCryptoAsync({ query }) {
  try {
    console.log('query', query);
    const response = yield call(cryptoApi, query);
    yield put({
      type: types.FETCH_GLOBAL_STATS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: types.FETCH_GLOBAL_STATS_FAIL, payload: error });
  }
}

export function* onLoadCrypto() {
  yield takeLatest(types.FETCH_GLOBAL_STATS_START, onLoadCryptoAsync);
}

const cryptoSaga = [fork(onLoadCrypto)];

export default function* rootSaga() {
  yield all([...cryptoSaga]);
}
