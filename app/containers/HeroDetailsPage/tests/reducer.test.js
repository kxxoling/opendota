import expect from 'expect';
import heroDetailsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('heroDetailsPageReducer', () => {
  it('returns the initial state', () => {
    expect(heroDetailsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
