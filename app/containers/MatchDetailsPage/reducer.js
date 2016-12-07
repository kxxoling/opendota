import { fromJS } from 'immutable';
import {
  LOAD_MATCH,
  LOAD_MATCH_SUCCESS,
  LOAD_MATCH_ERROR,
} from './constants';

const initialState = fromJS({
  loadingMatch: false,
  loadMatchError: false,
  match: {},
});

function matchDetailsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MATCH:
      return state
        .set('loadingMatch', true)
        .set('loadMatchError', false);
    case LOAD_MATCH_SUCCESS:
      return state
        .set('loadingMatch', false)
        .set('loadingMatchError', false)
        .set('match', action.match);
    case LOAD_MATCH_ERROR:
      return state
        .set('loadingMatch', false)
        .set('loadingMatchError', true);
    default:
      return state;
  }
}

export default matchDetailsPageReducer;
