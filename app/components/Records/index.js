import React, { PropTypes as T } from 'react';

import { Table, Column, Cell } from '../Utils';
import HeroAvatar from '../HeroAvatar';
import { secToReadable } from '../../utils/funcs';

class Records extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderHeader() {
    return (
      <Column>
        <Cell width={200}>最高</Cell>
        <Cell width={200}>记录</Cell>
        <Cell width={200}>英雄</Cell>
      </Column>
    );
  }

  renderCol(key, name, f) {
    const data = this.props[key];
    let record;
    if (f !== undefined) {
      record = f(data[key]);
    } else {
      record = data[key];
    }

    return (
      <Column key={key}>
        <Cell width={200}>{name}</Cell>
        <Cell width={200}>{record}</Cell>
        <Cell width={200}><HeroAvatar heroId={data.hero_id} /></Cell>
      </Column>
    );
  }
  render() {
    const cols = [
      this.renderCol('kda', 'KDA'),
      this.renderCol('kills', '人头'),
      this.renderCol('assists', '助攻'),
      this.renderCol('deaths', '死亡'),
      this.renderCol('hero_healing', '治疗'),
      this.renderCol('hero_damage', '英雄伤害'),
      this.renderCol('tower_kills', '补塔数'),
      this.renderCol('tower_damage', '建筑伤害'),
      this.renderCol('duration', '时长', secToReadable),
    ];
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

const recordShape = {
  tower_kills: T.number,
};

Records.propTypes = {
  kda: T.shape(recordShape),
  kills: T.shape(recordShape),
  deaths: T.shape(recordShape),
  assists: T.shape(recordShape),

  hero_healing: T.shape(recordShape),
  hero_damage: T.shape(recordShape),
  tower_kills: T.shape(recordShape),
  tower_damage: T.shape(recordShape),

  lane_efficiency_pct: T.shape(recordShape),
  pings: T.shape(recordShape),
  last_hits: T.shape(recordShape),
  neutral_kills: T.shape(recordShape),
  denies: T.shape(recordShape),

  duration: T.shape(recordShape),
  xp_per_min: T.shape(recordShape),
  gold_per_min: T.shape(recordShape),
  level: T.shape(recordShape),
  stomp: T.shape(recordShape),
  comeback: T.shape(recordShape),
  loss: T.shape(recordShape),
  throw: T.shape(recordShape),
  stuns: T.shape(recordShape),
  courier_kills: T.shape(recordShape),
  actions_per_min: T.shape(recordShape),

  purchase_tpscroll: T.shape(recordShape),
  purchase_ward_observer: T.shape(recordShape),
  purchase_ward_sentry: T.shape(recordShape),
  purchase_rapier: T.shape(recordShape),
  purchase_gem: T.shape(recordShape),
};

export default Records;
