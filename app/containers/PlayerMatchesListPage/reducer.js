import { fromJS } from 'immutable';
import {
  LOAD_MATCHES,
  LOAD_MATCHES_SUCCESS,
  LOAD_MATCHES_ERROR,
} from './constants';

const initialState = fromJS({
  matches: null,
  loadingMatches: false,
  loadMatchesError: false,
});

function playerMatchesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MATCHES:
      return state
        .set('loadingMatches', true)
        .set('loadMatchesError', false);
    case LOAD_MATCHES_SUCCESS:
      return state
        .set('loadMatchesError', false)
        .set('loadingMatches', false)
        .set('matches', action.matches);
    case LOAD_MATCHES_ERROR:
      return state
        .set('loadingMatches', false)
        .set('loadMatchesError', true);
    default:
      return state;
  }
}

export default playerMatchesPageReducer;
