import expect from 'expect';
import heroesReducer from '../reducer';
import { fromJS } from 'immutable';

describe('heroesReducer', () => {
  it('returns the initial state', () => {
    expect(heroesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
