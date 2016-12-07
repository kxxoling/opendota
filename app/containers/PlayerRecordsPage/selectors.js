import { createSelector } from 'reselect';

const selectPlayerRecordsPageDomain = () => (state) => state.get('playerRecordsPage');

const selectLoadingPlayerRecords = () => createSelector(
  selectPlayerRecordsPageDomain(),
  (state) => state.get('loadingPlayerRecords'),
);

const selectLoadPlayerRecordsError = () => createSelector(
  selectPlayerRecordsPageDomain(),
  (state) => state.get('loadPlayerRecordsError'),
);

const selectPlayerRecords = () => createSelector(
  selectPlayerRecordsPageDomain(),
  (state) => state.get('records'),
);

export {
  selectPlayerRecordsPageDomain,
  selectLoadingPlayerRecords,
  selectLoadPlayerRecordsError,
  selectPlayerRecords,
};
