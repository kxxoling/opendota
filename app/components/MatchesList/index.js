import React, { PropTypes as T } from 'react';

import { Table, Column, Cell } from '../Utils';
import { timeToStr } from '../../utils/funcs';

import HeroAvatar from '../HeroAvatar';

class MatchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderColumn(match) {
    return (
      <Column key={match.match_id}>
        <Cell width={100}>{match.match_id}</Cell>
        <Cell width={100}>{match.game_mode}</Cell>
        <Cell width={200}><HeroAvatar heroId={match.hero_id} /></Cell>
        <Cell width={300}>{timeToStr(match.start_time)}</Cell>
        <Cell width={200}>{match.kills}/{match.deaths}/{match.assists}</Cell>
      </Column>
    );
  }

  renderHeader() {
    return (
      <Column>
        <Cell width={100}>比赛 ID</Cell>
        <Cell width={100}>比赛模式</Cell>
        <Cell width={200}>所用英雄</Cell>
        <Cell width={300}>时间</Cell>
        <Cell width={200}>KDA</Cell>
      </Column>
    );
  }

  render() {
    const { matches } = this.props;
    const cols = [];
    matches.forEach((m) => cols.push(this.renderColumn(m)));
    return (
      <div>
        <Table>
          {this.renderHeader()}
          {cols}
        </Table>
      </div>
    );
  }
}

MatchesList.propTypes = {
  matches: T.arrayOf(T.shape({
    match_id: T.number.isRequired,
    kills: T.number.isRequired,
    deaths: T.number.isRequired,
    start_time: T.number.isRequired,
    player_slot: T.number.isRequired,
    version: T.number,
    assists: T.number.isRequired,
    game_mode: T.number.isRequired,
    duration: T.number.isRequired,
    radiant_win: T.bool.isRequired,
    hero_id: T.number.isRequired,
  })),
};

export default MatchesList;
