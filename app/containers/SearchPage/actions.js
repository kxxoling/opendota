import {
  LOAD_PLAYERS,
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR,
} from './constants';

export function loadPlayers(query) {
  return {
    type: LOAD_PLAYERS,
    query,
  };
}

export function loadPlayersSuccess(players) {
  return {
    type: LOAD_PLAYERS_SUCCESS,
    players,
  };
}

export function loadPlayersError(error) {
  return {
    type: LOAD_PLAYERS_ERROR,
    error,
  };
}
