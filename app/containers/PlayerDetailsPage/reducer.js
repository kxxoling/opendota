import { fromJS } from 'immutable';
import {
  LOAD_PLAYER,
  LOAD_PLAYER_ERROR,
  LOAD_PLAYER_SUCCESS,
  LOAD_PLAYER_MATCHES,
  LOAD_PLAYER_MATCHES_ERROR,
  LOAD_PLAYER_MATCHES_SUCCESS,
} from './constants';

const initialState = fromJS({
  loadingPlayer: false,
  loadPlayerError: false,
  player: {},
  loadingPlayerMatches: false,
  loadPlayerMatchesError: false,
  matches: null,
});

function playerDetailsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PLAYER_SUCCESS:
      return state
        .set('loadingPlayer', false)
        .set('loadPlayerError', false)
        .set('player', action.player);
    case LOAD_PLAYER_ERROR:
      return state
        .set('loadingPlayer', false)
        .set('loadPlayerError', true);
    case LOAD_PLAYER:
      return state
        .set('loadingPlayer', true)
        .set('loadPlayerError', false);
    case LOAD_PLAYER_MATCHES:
      return state
        .set('loadingPlayerMatches', true)
        .set('loadPlayerMatchesError', false);
    case LOAD_PLAYER_MATCHES_SUCCESS:
      return state
        .set('loadingPlayerMatches', false)
        .set('loadPlayerMatchesError', false)
        .set('matches', action.matches);
    case LOAD_PLAYER_MATCHES_ERROR:
      return state
        .set('loadPlayerMatchesError', true)
        .set('loadingPlayerMatches', false);
    default:
      return state;
  }
}

export default playerDetailsPageReducer;
