import { take, call, put, fork } from 'redux-saga/effects';
import {
  loadPlayerMatches,
  loadPlayerMatchesSuccess,
  loadPlayerMatchesError,
  loadPlayer,
  loadPlayerSuccess,
  loadPlayerError,
} from './actions';
import {
  LOAD_PLAYER_MATCHES,
  LOAD_PLAYER,
} from './constants';
import request from '../../utils/request';

export function* fetchPlayerMatches(playerId) {
  const api = `https://api.opendota.com/api/players/${playerId}/matches?limit=20`;

  put(loadPlayerMatches(playerId));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadPlayerMatchesError(rsp.err));
  } else {
    yield put(loadPlayerMatchesSuccess(rsp.data));
  }
}

export function* fetchPlayer(playerId) {
  const api = `https://api.opendota.com/api/players/${playerId}`;

  put(loadPlayer(playerId));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadPlayerError(rsp.err));
  } else {
    yield put(loadPlayerSuccess(rsp.data));
  }
}

export function* watchFetchPlayerMatches() {
  while (true) {
    const { playerId } = yield take(LOAD_PLAYER_MATCHES);
    yield call(fetchPlayerMatches, playerId);
  }
}
export function* watchFetchPlayer() {
  while (true) {
    const { playerId } = yield take(LOAD_PLAYER);
    yield call(fetchPlayer, playerId);
  }
}

export function* playerMatches() {
  yield fork(watchFetchPlayerMatches);
}
export function* player() {
  yield fork(watchFetchPlayer);
}

export default [playerMatches, player];
