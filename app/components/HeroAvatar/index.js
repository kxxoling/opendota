import React, { PropTypes as T } from 'react';
import { heroById } from '../../utils/data';
import styled from 'styled-components';

const Avatar = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const sizeTable = {
  big: { width: 127, height: 71 },
  middle: {},
  small: {},
};

class HeroAvatar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { heroId } = this.props;
    const size = this.props.size || 'big';
    const hero = heroById[heroId];
    const heroNpcName = hero.name.replace('npc_dota_hero_', '');

    const { width, height } = sizeTable[size];
    return (
      <Avatar
        src={`http://cdn.dota2.com/apps/dota2/images/heroes/${heroNpcName}_hphover.png`}
        width={width}
        height={height}
        alt={hero.localized_name}
      />
    );
  }
}

HeroAvatar.propTypes = {
  heroId: T.number.isRequired,
  size: T.string,
};

export default HeroAvatar;
