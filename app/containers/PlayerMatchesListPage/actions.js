import {
  LOAD_MATCHES,
  LOAD_MATCHES_SUCCESS,
  LOAD_MATCHES_ERROR,
} from './constants';

export function loadMatches(playerId) {
  return {
    type: LOAD_MATCHES,
    playerId,
  };
}

export function loadMatchesSuccess(matches) {
  return {
    type: LOAD_MATCHES_SUCCESS,
    matches,
  };
}

export function loadMatchesError(error) {
  return {
    type: LOAD_MATCHES_ERROR,
    error,
  };
}
