import { createSelector } from 'reselect';


const selectAppDomain = () => (state) => state.get('app');

const selectPlayerId = () => createSelector(
  selectAppDomain(),
  (state) => state.get('playerId'),
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectLocationState,
  selectPlayerId,
};
