import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import {
  selectLoadingPlayers,
  selectLoadPlayersError,
  selectPlayers,
} from './selectors';
import {
  loadPlayers,
} from './actions';

const Search = styled.input`
  display: block;
  font-size: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  border-bottom: 2px solid white;
`;
const Container = styled.div`
  padding: 40px;
`;
const Player = styled.div`
`;

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.fetchPlayers('kxxoling');
  }

  renderPlayers() {
    const cols = [];
    const players = this.props.players || [];
    players.forEach((player) => cols.push(<Player key={player.account_id}>{player.personaname}</Player>));
    return cols;
  }

  render() {
    return (
      <div>
        <Helmet
          title="SearchPage"
          meta={[
            { name: 'description', content: 'Description of SearchPage' },
          ]}
        />
        <Search placeholder="搜索" />
        <Container>
          {this.renderPlayers()}
        </Container>
      </div>
    );
  }
}

SearchPage.propTypes = {
  players: T.array,
  fetchPlayers: T.func,
  loadingPlayers: T.bool,
  loadPlayersError: T.bool,
};

const mapStateToProps = createStructuredSelector({
  loadingPlayers: selectLoadingPlayers(),
  loadPlayersError: selectLoadPlayersError(),
  players: selectPlayers(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPlayers(query) {
      dispatch(loadPlayers(query));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
