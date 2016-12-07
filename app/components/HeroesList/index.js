import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import HeroAvatar from '../HeroAvatar';
import HeroName from '../HeroName';

const Block = styled.div`
  display: inline-block;
  width: 200px;
  height: 120px;

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 72px;
  }
  & span {
    display: block;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 42px;
  }
`;

class HeroesList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderHero(hero) {
    return (
      <Block key={hero.id}>
        <Link to={`/heroes/${hero.id}`}>
          <HeroAvatar heroId={hero.id} />
          <HeroName heroId={hero.id} />
        </Link>
      </Block>
    );
  }

  render() {
    const { heroes } = this.props;
    const cols = [];
    heroes.forEach((hero) => cols.push(this.renderHero(hero)));
    return (
      <div>
        {cols}
      </div>
    );
  }
}

HeroesList.propTypes = {
  heroes: T.array,
};

export default HeroesList;
