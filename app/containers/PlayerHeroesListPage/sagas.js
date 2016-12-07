import { take, call, put, fork } from 'redux-saga/effects';
import {
  loadHeroesList,
  loadHeroesListSuccess,
  loadHeroesListError,
} from './actions';
import {
  LOAD_HEROES_LIST,
} from './constants';
import request from '../../utils/request';

export function* fetchHeroesList(playerId) {
  const api = `https://api.opendota.com/api/players/${playerId}/heroes`;

  put(loadHeroesList(playerId));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadHeroesListError(rsp.err));
  } else {
    yield put(loadHeroesListSuccess(rsp.data));
  }
}

export function* watchFetchHeroesList() {
  while (true) {
    const { playerId } = yield take(LOAD_HEROES_LIST);
    yield call(fetchHeroesList, playerId);
  }
}

export function* heroesList() {
  yield fork(watchFetchHeroesList);
}

export default [heroesList];
