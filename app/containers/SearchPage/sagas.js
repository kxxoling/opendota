import { take, call, put, fork } from 'redux-saga/effects';
import {
  loadPlayers,
  loadPlayersSuccess,
  loadPlayersError,
} from './actions';
import {
  LOAD_PLAYERS,
} from './constants';
import request from '../../utils/request';

export function* fetchPlayers(query) {
  const api = `https://api.opendota.com/api/search?q=${query}`;

  put(loadPlayers(query));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadPlayersError(rsp.err));
  } else {
    yield put(loadPlayersSuccess(rsp.data));
  }
}

export function* watchFetchPlayers() {
  while (true) {
    const { query } = yield take(LOAD_PLAYERS);
    yield call(fetchPlayers, query);
  }
}

export function* players() {
  yield fork(watchFetchPlayers);
}

export default [players];
