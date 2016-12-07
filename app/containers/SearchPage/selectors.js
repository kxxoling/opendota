
import { createSelector } from 'reselect';

const selectSearchPageDomain = () => (state) => state.get('searchPage');

const selectLoadingPlayers = () => createSelector(
  selectSearchPageDomain(),
  (state) => state.get('loadingPlayers'),
);

const selectLoadPlayersError = () => createSelector(
  selectSearchPageDomain(),
  (state) => state.get('loadPlayersError'),
);

const selectPlayers = () => createSelector(
  selectSearchPageDomain(),
  (state) => state.get('players'),
);

export {
  selectLoadingPlayers,
  selectLoadPlayersError,
  selectPlayers,
};
