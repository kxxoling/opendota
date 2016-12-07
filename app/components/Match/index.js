import React, { PropTypes as T } from 'react';
import HeroAvatar from '../HeroAvatar';
import { Table, Column, Cell } from '../Utils';


class Match extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderHeader() {
    return (
      <Column>
        <Cell width={200}>玩家</Cell>
        <Cell width={200}>英雄</Cell>
        <Cell width={100}>KDA</Cell>
        <Cell width={100}>英雄伤害</Cell>
        <Cell width={100}>治疗</Cell>
        <Cell width={100}>建筑伤害</Cell>
        <Cell width={100}>经验</Cell>
        <Cell width={100}>经济</Cell>
        <Cell width={100}>物品</Cell>
      </Column>
    );
  }

  renderCols() {
    const cols = [];
    for (const player of this.props.match.players) {
      cols.push(this.renderCol(player));
    }
    return cols;
  }

  renderCol(player) {
    return (
      <Column key={player.hero_id}>
        <Cell width={200}>{player.personaname}</Cell>
        <Cell width={200}><HeroAvatar heroId={player.hero_id} /></Cell>
        <Cell width={100}>{player.hero_kills} / {player.deaths} / {player.assists}</Cell>
        <Cell width={100}>{player.hero_damage}</Cell>
        <Cell width={100}>{player.hero_healing}</Cell>
        <Cell width={100}>{player.tower_damage}</Cell>
        <Cell width={100}>{player.total_gold} / {player.xp_per_min}</Cell>
        <Cell width={100}>{player.total_gold} / {player.gold_per_min}</Cell>
        <Cell width={100}>
          {player.item_0},
          {player.item_1},
          {player.item_2},
          {player.item_3},
          {player.item_4},
          {player.item_5}
        </Cell>
      </Column>
    );
  }

  render() {
    const cols = this.renderCols();
    return (
      <div>
        <Table>
          { this.renderHeader() }
          {cols}
        </Table>
      </div>
    );
  }
}

Match.propTypes = {
  match: T.shape({
    players: T.arrayOf(T.shape({
      account_id: T.number,
      personaname: T.string,
      hero_id: T.number.isRequired,
      win: T.bool.number,
      isRadiant: T.bool.isRequired,
      assists: T.number.isRequired,
      deaths: T.number.isRequired,
      hero_kills: T.number.isRequired,
      denies: T.number.isRequired,
      total_gold: T.number.isRequired,
      gold_per_min: T.number.isRequired,
      total_xp: T.number.isRequired,
      xp_per_min: T.number.isRequired,
      hero_damage: T.number.isRequired,
      hero_healing: T.number.isRequired,
      tower_damage: T.number.isRequired,
      tower_kills: T.number.isRequired,
      item_0: T.number.isRequired,
      item_1: T.number.isRequired,
      item_2: T.number.isRequired,
      item_3: T.number.isRequired,
      item_4: T.number.isRequired,
      item_5: T.number.isRequired,
    })),
  }),
};

export default Match;
