import { createSelector } from 'reselect';

const selectPlayerDetailsPageDomain = () => (state) => state.get('playerDetailsPage');

const selectLoadingPlayerMatches = () => createSelector(
  selectPlayerDetailsPageDomain(),
  (state) => state.get('loadingPlayerMatches'),
);

const selectloadPlayerMatchesError = () => createSelector(
  selectPlayerDetailsPageDomain(),
  (state) => state.get('loadPlayerMatchesError'),
);

const selectPlayerMatches = () => createSelector(
  selectPlayerDetailsPageDomain(),
  (state) => state.get('matches'),
);

const selectLoadingPlayer = () => createSelector(
  selectPlayerDetailsPageDomain(),
  (state) => state.get('loadingPlayer'),
);

const selectloadPlayerError = () => createSelector(
  selectPlayerDetailsPageDomain(),
  (state) => state.get('loadPlayerError'),
);

const selectPlayer = () => createSelector(
  selectPlayerDetailsPageDomain(),
  (state) => state.get('player'),
);

export {
  selectPlayerDetailsPageDomain,
  selectLoadingPlayerMatches,
  selectloadPlayerMatchesError,
  selectPlayerMatches,
  selectLoadingPlayer,
  selectloadPlayerError,
  selectPlayer,
};
