import {
  LOAD_HEROES_LIST,
  LOAD_HEROES_LIST_SUCCESS,
  LOAD_HEROES_LIST_ERROR,
} from './constants';

export function loadHeroesList(playerId) {
  return {
    type: LOAD_HEROES_LIST,
    playerId,
  };
}

export function loadHeroesListSuccess(heroesList) {
  return {
    type: LOAD_HEROES_LIST_SUCCESS,
    heroesList,
  };
}

export function loadHeroesListError(error) {
  return {
    type: LOAD_HEROES_LIST_ERROR,
    error,
  };
}
