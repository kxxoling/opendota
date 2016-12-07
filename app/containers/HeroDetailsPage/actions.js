import {
  LOAD_HERO_BENCHMARK,
  LOAD_HERO_BENCHMARK_SUCCESS,
  LOAD_HERO_BENCHMARK_ERROR,
} from './constants';

export function loadHeroBenchmark(heroId) {
  return {
    type: LOAD_HERO_BENCHMARK,
    heroId,
  };
}

export function loadHeroBenchmarkSuccess(benchmark) {
  return {
    type: LOAD_HERO_BENCHMARK_SUCCESS,
    benchmark,
  };
}

export function loadHeroBenchmarkError(error) {
  return {
    type: LOAD_HERO_BENCHMARK_ERROR,
    error,
  };
}
