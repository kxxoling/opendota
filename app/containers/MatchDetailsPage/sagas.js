import { take, call, put, fork } from 'redux-saga/effects';
import {
  loadMatch,
  loadMatchSuccess,
  loadMatchError,
} from './actions';
import {
  LOAD_MATCH,
} from './constants';
import request from '../../utils/request';

export function* fetchMatch(matchId) {
  const api = `https://api.opendota.com/api/matches/${matchId}`;

  put(loadMatch(matchId));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadMatchError(rsp.err));
  } else {
    yield put(loadMatchSuccess(rsp.data));
  }
}

export function* watchFetchMatch() {
  while (true) {
    const { matchId } = yield take(LOAD_MATCH);
    yield call(fetchMatch, matchId);
  }
}

export function* match() {
  yield fork(watchFetchMatch);
}

export default [match];
