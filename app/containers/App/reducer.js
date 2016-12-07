import { fromJS } from 'immutable';
import {
  SET_PLAYER_ID,
} from './constants';

const initialState = fromJS({
  playerId: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_ID:
      return state.set('playerId', action.playerId);
    default:
      return state;
  }
}

export default appReducer;
