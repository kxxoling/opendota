import expect from 'expect';
import matchDetailsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('matchDetailsPageReducer', () => {
  it('returns the initial state', () => {
    expect(matchDetailsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
