import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import {
  selectLoadingHeroesList,
  selectLoadHeroesListError,
  selectHeroesList,
} from './selectors';
import {
  loadHeroesList,
} from './actions';

import PlayerHeroesList from '../../components/PlayerHeroesList';

export class PlayerHeroesListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const playerId = 121230511;
    this.props.fetchHeroesList(playerId);
  }
  renderHeroesList() {
    const { heroesList, loadingHeroesList, loadHeroesListError } = this.props;
    if (loadHeroesListError) {
      return (<div>error</div>);
    } else if (loadingHeroesList) {
      return (<div>loading...</div>);
    } else if (heroesList) {
      return (
        <PlayerHeroesList heroes={heroesList} />
      );
    }
    return <div></div>;
  }
  render() {
    return (
      <div>
        <Helmet
          title="PlayerHeroesListPage"
          meta={[
            { name: 'description', content: 'Description of PlayerHeroesListPage' },
          ]}
        />
        {this.renderHeroesList()}
      </div>
    );
  }
}

PlayerHeroesListPage.propTypes = {
  heroesList: T.array,
  fetchHeroesList: T.func,
  loadingHeroesList: T.bool,
  loadHeroesListError: T.bool,
};

const mapStateToProps = createStructuredSelector({
  loadingHeroesList: selectLoadingHeroesList(),
  loadHeroesListError: selectLoadHeroesListError(),
  heroesList: selectHeroesList(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchHeroesList(playerId) {
      dispatch(loadHeroesList(playerId));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHeroesListPage);
