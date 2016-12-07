import { take, call, put, fork } from 'redux-saga/effects';
import {
  loadMatches,
  loadMatchesSuccess,
  loadMatchesError,
} from './actions';
import {
  LOAD_MATCHES,
} from './constants';
import request from '../../utils/request';

export function* fetchMatches(playerId) {
  const api = `https://api.opendota.com/api/players/${playerId}/matches?limit=50`;

  put(loadMatches(playerId));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadMatchesError(rsp.err));
  } else {
    yield put(loadMatchesSuccess(rsp.data));
  }
}

export function* watchFetchMatches() {
  while (true) {
    const { playerId } = yield take(LOAD_MATCHES);
    yield call(fetchMatches, playerId);
  }
}

export function* matches() {
  yield fork(watchFetchMatches);
}

export default [matches];
