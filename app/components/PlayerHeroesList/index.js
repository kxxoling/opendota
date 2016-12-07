import React, { PropTypes as T } from 'react';

import HeroAvatar from '../HeroAvatar';
import HeroName from '../HeroName';

import { timeToStr, numberToPercent } from '../../utils/funcs';

import { Table, Column, Cell } from '../Utils';

class PlayerHeroesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderColumn(hero) {
    return (
      <Column key={hero.hero_id}>
        <Cell width={200}>
          <HeroAvatar heroId={parseInt(hero.hero_id, 10)} />
          <HeroName heroId={parseInt(hero.hero_id, 10)} />
        </Cell>
        <Cell width={200}>{timeToStr(hero.last_played)}</Cell>

        <Cell width={100}>{hero.games}</Cell>
        <Cell width={100}>{numberToPercent(hero.win / hero.games)}</Cell>

        <Cell width={100}>{hero.with_games}</Cell>
        <Cell width={100}>{numberToPercent(hero.with_win / hero.with_games)}</Cell>

        <Cell width={100}>{hero.against_games}</Cell>
        <Cell width={100}>{numberToPercent(hero.against_win / hero.against_games)}</Cell>
      </Column>
    );
  }

  renderHeader() {
    return (
      <Column>
        <Cell width={200}>英雄</Cell>
        <Cell width={200}>上次使用时间</Cell>
        <Cell width={100}>使用次数</Cell>
        <Cell width={100}>胜率</Cell>
        <Cell width={100}>友方次数</Cell>
        <Cell width={100}>友方胜率</Cell>
        <Cell width={100}>敌方次数</Cell>
        <Cell width={100}>敌方胜率</Cell>
      </Column>
    );
  }

  render() {
    const { heroes } = this.props;
    const cols = [];
    heroes.forEach((hero) => cols.push(this.renderColumn(hero)));
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

PlayerHeroesList.propTypes = {
  heroes: T.arrayOf(T.shape({
    last_played: T.number.isRequired,
    win: T.number.isRequired,
    against_win: T.number.isRequired,
    games: T.number.isRequired,
    against_games: T.number.isRequired,
    with_win: T.number.isRequired,
    with_games: T.number.isRequired,
    hero_id: T.string.isRequired,
  })),
};

export default PlayerHeroesList;
