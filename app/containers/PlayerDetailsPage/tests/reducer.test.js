import expect from 'expect';
import playerDetailsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('playerDetailsPageReducer', () => {
  it('returns the initial state', () => {
    expect(playerDetailsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
