import { fromJS } from 'immutable';
import {
  LOAD_HERO_BENCHMARK,
  LOAD_HERO_BENCHMARK_SUCCESS,
  LOAD_HERO_BENCHMARK_ERROR,
} from './constants';

const initialState = fromJS({
  loadingHeroBenchmark: false,
  loadHeroBenchmarkError: false,
  benchmark: {},
});

function heroDetailsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HERO_BENCHMARK:
      return state
        .set('loadingHeroBenchmark', true)
        .set('loadHeroBenchmarkError', false);
    case LOAD_HERO_BENCHMARK_ERROR:
      return state
        .set('loadingHeroBenchmark', false)
        .set('loadHeroBenchmarkError', true);
    case LOAD_HERO_BENCHMARK_SUCCESS:
      return state
        .set('loadingHeroBenchmark', false)
        .set('loadHeroBenchmarkError', false)
        .set('benchmark', action.benchmark);
    default:
      return state;
  }
}

export default heroDetailsPageReducer;
