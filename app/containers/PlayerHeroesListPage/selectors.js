import { createSelector } from 'reselect';

const selectPlayerHeroesListPageDomain = () => (state) => state.get('playerHeroesListPage');

const selectLoadingHeroesList = () => createSelector(
  selectPlayerHeroesListPageDomain(),
  (state) => state.get('loadingHeroesList'),
);

const selectLoadHeroesListError = () => createSelector(
  selectPlayerHeroesListPageDomain(),
  (state) => state.get('loadHeroesListError'),
);

const selectHeroesList = () => createSelector(
  selectPlayerHeroesListPageDomain(),
  (state) => state.get('heroesList'),
);

export {
  selectLoadingHeroesList,
  selectLoadHeroesListError,
  selectHeroesList,
};
