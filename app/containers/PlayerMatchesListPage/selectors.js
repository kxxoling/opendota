import { createSelector } from 'reselect';

const selectPlayerMatchesListPageDomain = () => (state) => state.get('playerMatchesListPage');

const selectLoadingMatches = () => createSelector(
  selectPlayerMatchesListPageDomain(),
  (state) => state.get('loadingMatches'),
);

const selectLoadMatchesError = () => createSelector(
  selectPlayerMatchesListPageDomain(),
  (state) => state.get('loadMatchesError'),
);

const selectMatches = () => createSelector(
  selectPlayerMatchesListPageDomain(),
  (state) => state.get('matches'),
);

export {
  selectLoadingMatches,
  selectLoadMatchesError,
  selectMatches,
};
