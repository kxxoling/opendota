import expect from 'expect';
import playerRecordsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('playerRecordsReducer', () => {
  it('returns the initial state', () => {
    expect(playerRecordsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
