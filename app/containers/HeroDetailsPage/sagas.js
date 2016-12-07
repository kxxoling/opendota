import { take, call, put, fork } from 'redux-saga/effects';
import {
  loadHeroBenchmark,
  loadHeroBenchmarkSuccess,
  loadHeroBenchmarkError,
} from './actions';
import {
  LOAD_HERO_BENCHMARK,
} from './constants';
import request from '../../utils/request';

export function* fetchHeroBenchmark(heroId) {
  const api = `https://api.opendota.com/api/benchmarks/?hero_id=${heroId}`;

  put(loadHeroBenchmark(heroId));
  const rsp = yield call(request, api);

  if (rsp.err) {
    yield put(loadHeroBenchmarkError(rsp.err));
  } else {
    yield put(loadHeroBenchmarkSuccess(rsp.data));
  }
}

export function* watchFetchHeroBenchmark() {
  while (true) {
    const { heroId } = yield take(LOAD_HERO_BENCHMARK);
    yield call(fetchHeroBenchmark, heroId);
  }
}

export function* heroBenchmark() {
  yield fork(watchFetchHeroBenchmark);
}

export default [heroBenchmark];
