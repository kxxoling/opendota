import expect from 'expect';
import playerHeroesListPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('playerHeroesListPageReducer', () => {
  it('returns the initial state', () => {
    expect(playerHeroesListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
