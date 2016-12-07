import { take, call, put, fork } from 'redux-saga/effects';
import {
  loadPlayerRecords,
  loadPlayerRecordsSuccess,
  loadPlayerRecordsError,
} from './actions';
import {
  LOAD_PLAYER_RECORDS,
} from './constants';
import request from '../../utils/request';

export function* fetchPlayerRecords(playerId) {
  const api = `https://api.opendota.com/api/players/${playerId}/records`;

  put(loadPlayerRecords(playerId));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadPlayerRecordsError(rsp.err));
  } else {
    yield put(loadPlayerRecordsSuccess(rsp.data));
  }
}

export function* watchFetchPlayerRecords() {
  while (true) {
    const { playerId } = yield take(LOAD_PLAYER_RECORDS);
    yield call(fetchPlayerRecords, playerId);
  }
}

export function* playerRecords() {
  yield fork(watchFetchPlayerRecords);
}

export default [playerRecords];
