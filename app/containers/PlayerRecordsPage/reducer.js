import { fromJS } from 'immutable';
import {
  LOAD_PLAYER_RECORDS,
  LOAD_PLAYER_RECORDS_ERROR,
  LOAD_PLAYER_RECORDS_SUCCESS,
} from './constants';

const initialState = fromJS({
  loadingPlayerRecords: false,
  loadPlayerRecordsError: false,
  records: {},
});

function playerRecordsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PLAYER_RECORDS:
      return state
        .set('loadingPlayerRecords', true)
        .set('loadPlayerRecordsError', false);
    case LOAD_PLAYER_RECORDS_SUCCESS:
      return state
        .set('loadingPlayerRecords', false)
        .set('loadPlayerRecordsError', false)
        .set('records', action.records);
    case LOAD_PLAYER_RECORDS_ERROR:
      return state
        .set('loadingPlayerRecords', false)
        .set('loadPlayerRecordsError', true);
    default:
      return state;
  }
}

export default playerRecordsPageReducer;
