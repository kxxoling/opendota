import {
  LOAD_MATCH,
  LOAD_MATCH_SUCCESS,
  LOAD_MATCH_ERROR,
} from './constants';

export function loadMatch(matchId) {
  return {
    type: LOAD_MATCH,
    matchId,
  };
}

export function loadMatchSuccess(match) {
  return {
    type: LOAD_MATCH_SUCCESS,
    match,
  };
}

export function loadMatchError(error) {
  return {
    type: LOAD_MATCH_ERROR,
    error,
  };
}
