import {
  LOAD_PLAYER,
  LOAD_PLAYER_ERROR,
  LOAD_PLAYER_SUCCESS,
  LOAD_PLAYER_MATCHES,
  LOAD_PLAYER_MATCHES_ERROR,
  LOAD_PLAYER_MATCHES_SUCCESS,
} from './constants';

export function loadPlayer(playerId) {
  return {
    type: LOAD_PLAYER,
    playerId,
  };
}

export function loadPlayerSuccess(player) {
  return {
    type: LOAD_PLAYER_SUCCESS,
    player,
  };
}

export function loadPlayerError(error) {
  return {
    type: LOAD_PLAYER_ERROR,
    error,
  };
}

export function loadPlayerMatches(playerId) {
  return {
    type: LOAD_PLAYER_MATCHES,
    playerId,
  };
}

export function loadPlayerMatchesSuccess(matches) {
  return {
    type: LOAD_PLAYER_MATCHES_SUCCESS,
    matches,
  };
}

export function loadPlayerMatchesError(error) {
  return {
    type: LOAD_PLAYER_MATCHES_ERROR,
    error,
  };
}
