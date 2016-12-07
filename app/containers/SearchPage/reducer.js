import { fromJS } from 'immutable';
import {
  LOAD_PLAYERS,
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR,
} from './constants';

const initialState = fromJS({
  players: null,
  loadingPlayers: false,
  loadPlayersError: false,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PLAYERS:
      return state
        .set('loadingPlayers', true)
        .set('loadPlayersError', false);
    case LOAD_PLAYERS_SUCCESS:
      return state
        .set('loadingPlayers', false)
        .set('loadPlayersError', false)
        .set('players', action.players);
    case LOAD_PLAYERS_ERROR:
      return state
        .set('loadingPlayers', false)
        .set('loadPlayersError', true);
    default:
      return state;
  }
}

export default searchPageReducer;
