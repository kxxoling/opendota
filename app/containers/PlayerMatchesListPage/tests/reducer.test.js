import expect from 'expect';
import playerMatchesListPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('playerMatchesListPageReducer', () => {
  it('returns the initial state', () => {
    expect(playerMatchesListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
