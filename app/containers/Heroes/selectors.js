import { createSelector } from 'reselect';

const selectHeroesDomain = () => (state) => state.get('heroes');

const selectHeroes = () => createSelector(
  selectHeroesDomain(),
  (substate) => substate.toJS()
);

export default selectHeroes;
export {
  selectHeroesDomain,
};
