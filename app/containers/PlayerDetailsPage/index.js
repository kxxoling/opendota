import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';

import {
  selectLoadingPlayerMatches,
  selectloadPlayerMatchesError,
  selectPlayerMatches,
  selectLoadingPlayer,
  selectloadPlayerError,
  selectPlayer,
} from './selectors';
import {
  loadPlayer,
  loadPlayerMatches,
} from './actions';

import PlayerProfile from '../../components/PlayerProfile';
import MatchesList from '../../components/MatchesList';
import PlayerHeroesList from '../../components/PlayerHeroesList';
import heroes from '../../mocks/PlayerHeroes.json';

const Title = styled.h2`
  padding-left: 16px;
  border-left: 5px solid #007f7f;
`;

export class PlayerDetailsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const playerId = 121230511;
    this.props.fetchPlayer(playerId);
    this.props.fetchPlayerMatches(playerId);
  }
  renderMatches() {
    const { matches, loadingPlayerMatches, loadPlayerMatchesError } = this.props;
    if (loadPlayerMatchesError) {
      return (<div>error</div>);
    } else if (loadingPlayerMatches) {
      return (<div>loading...</div>);
    } else if (matches) {
      return (
        <MatchesList matches={matches.slice(0, 10)} />
      );
    }
    return <div></div>;
  }
  renderPlayerProfile() {
    const { player, loadingPlayer, loadPlayerError } = this.props;
    if (loadPlayerError) {
      return (<div>error</div>);
    } else if (loadingPlayer) {
      return (<div>loading...</div>);
    } else if (player.profile) {
      return (
        <PlayerProfile {...player} />
      );
    }
    return <div></div>;
  }
  render() {
    return (
      <div>
        <Helmet
          title="玩家个人主页"
          meta={[
            { name: 'description', content: '玩家个人主页' },
          ]}
        />
        {this.renderPlayerProfile()}
        <Title>常用英雄</Title>
        <PlayerHeroesList heroes={heroes.slice(0, 10)} />
        <Title>近期比赛</Title>
        {this.renderMatches()}
      </div>
    );
  }
}

PlayerDetailsPage.propTypes = {
  fetchPlayer: T.func,
  loadingPlayer: T.bool,
  loadPlayerError: T.bool,
  player: T.object,

  fetchPlayerMatches: T.func,
  loadingPlayerMatches: T.bool,
  loadPlayerMatchesError: T.bool,
  matches: T.array,
};

const mapStateToProps = createStructuredSelector({
  loadingPlayer: selectLoadingPlayer(),
  loadPlayerError: selectloadPlayerError(),
  player: selectPlayer(),

  loadingPlayerMatches: selectLoadingPlayerMatches(),
  loadPlayerMatchesError: selectloadPlayerMatchesError(),
  matches: selectPlayerMatches(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPlayer(playerId) {
      dispatch(loadPlayer(playerId));
    },
    fetchPlayerMatches(playerId) {
      dispatch(loadPlayerMatches(playerId));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetailsPage);
