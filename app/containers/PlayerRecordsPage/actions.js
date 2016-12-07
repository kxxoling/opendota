import {
  LOAD_PLAYER_RECORDS,
  LOAD_PLAYER_RECORDS_SUCCESS,
  LOAD_PLAYER_RECORDS_ERROR,
} from './constants';

export function loadPlayerRecords(playerId) {
  return {
    type: LOAD_PLAYER_RECORDS,
    playerId,
  };
}

export function loadPlayerRecordsSuccess(records) {
  return {
    type: LOAD_PLAYER_RECORDS_SUCCESS,
    records,
  };
}

export function loadPlayerRecordsError(error) {
  return {
    type: LOAD_PLAYER_RECORDS_ERROR,
    error,
  };
}
