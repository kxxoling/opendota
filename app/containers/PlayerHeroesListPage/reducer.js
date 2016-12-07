import { fromJS } from 'immutable';
import {
  LOAD_HEROES_LIST,
  LOAD_HEROES_LIST_SUCCESS,
  LOAD_HEROES_LIST_ERROR,
} from './constants';

const initialState = fromJS({
  heroesList: null,
  loadingHeroesList: false,
  loadHeroesListError: false,
});

function playerHeroesListPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HEROES_LIST:
      return state
        .set('loadingHeroesList', true)
        .set('loadHeroesListError', false);
    case LOAD_HEROES_LIST_SUCCESS:
      return state
        .set('loadHeroesListError', false)
        .set('loadingHeroesList', false)
        .set('heroesList', action.heroesList);
    case LOAD_HEROES_LIST_ERROR:
      return state
        .set('loadingHeroesList', false)
        .set('loadHeroesListError', true);
    default:
      return state;
  }
}

export default playerHeroesListPageReducer;
