import { createSelector } from 'reselect';

const selectHeroDetailsPageDomain = () => (state) => state.get('heroDetailsPage');

const selectLoadingHeroBenchmark = () => createSelector(
  selectHeroDetailsPageDomain(),
  (state) => state.get('loadingHeroBenchmark'),
);

const selectloadHeroBenchmarkError = () => createSelector(
  selectHeroDetailsPageDomain(),
  (state) => state.get('loadHeroBenchmarkError'),
);

const selectHeroBenchmark = () => createSelector(
  selectHeroDetailsPageDomain(),
  (state) => state.get('benchmark'),
);

export {
  selectHeroDetailsPageDomain,
  selectLoadingHeroBenchmark,
  selectloadHeroBenchmarkError,
  selectHeroBenchmark,
};
