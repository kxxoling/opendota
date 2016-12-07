import {
  SET_PLAYER_ID,
} from './constants';

export function setPlayerId(playerId) {
  return {
    type: SET_PLAYER_ID,
    playerId,
  };
}
