import { createSelector } from 'reselect';

const selectMatchDetailsPageDomain = () => (state) => state.get('matchDetailsPage');

const selectLoadingMatch = () => createSelector(
  selectMatchDetailsPageDomain(),
  (state) => state.get('loadingMatch'),
);

const selectLoadMatchError = () => createSelector(
  selectMatchDetailsPageDomain(),
  (state) => state.get('loadMatchError'),
);

const selectMatch = () => createSelector(
  selectMatchDetailsPageDomain(),
  (state) => state.get('match'),
);

export {
  selectMatchDetailsPageDomain,
  selectLoadingMatch,
  selectLoadMatchError,
  selectMatch,
};
