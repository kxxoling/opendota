import React, { PropTypes as T } from 'react';
import { heroById } from '../../utils/data';

class HeroName extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { heroId } = this.props;
    const hero = heroById[heroId];
    return (
      <span>
        {hero.localized_name}
      </span>
    );
  }
}

HeroName.propTypes = {
  heroId: T.number,
};

export default HeroName;
