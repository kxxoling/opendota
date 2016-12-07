import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/heroes',
      name: 'heroes',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Heroes/reducer'),
          System.import('containers/Heroes/sagas'),
          System.import('containers/Heroes'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('heroes', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/heroes/:heroId',
      name: 'heroDetails',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HeroDetailsPage/reducer'),
          System.import('containers/HeroDetailsPage/sagas'),
          System.import('containers/HeroDetailsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('heroDetailsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/me',
      name: 'playerDetails',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PlayerDetailsPage/reducer'),
          System.import('containers/PlayerDetailsPage/sagas'),
          System.import('containers/PlayerDetailsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('playerDetailsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/matches/:matchId',
      name: 'matchDetails',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MatchDetailsPage/reducer'),
          System.import('containers/MatchDetailsPage/sagas'),
          System.import('containers/MatchDetailsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('matchDetailsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/me/records',
      name: 'playerRecords',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PlayerRecordsPage/reducer'),
          System.import('containers/PlayerRecordsPage/sagas'),
          System.import('containers/PlayerRecordsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('playerRecordsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/me/heroes',
      name: 'playerHeroesListPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PlayerHeroesListPage/reducer'),
          System.import('containers/PlayerHeroesListPage/sagas'),
          System.import('containers/PlayerHeroesListPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('playerHeroesListPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/me/matches',
      name: 'playerMatchesListPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PlayerMatchesListPage/reducer'),
          System.import('containers/PlayerMatchesListPage/sagas'),
          System.import('containers/PlayerMatchesListPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('playerMatchesListPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/search',
      name: 'searchPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SearchPage/reducer'),
          System.import('containers/SearchPage/sagas'),
          System.import('containers/SearchPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('searchPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
