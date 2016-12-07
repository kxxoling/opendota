import React, { PropTypes as T } from 'react';

import HeroAvatar from '../HeroAvatar';
import HeroName from '../HeroName';

class HeroBasics extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { heroId } = this.props;
    return (
      <div>
        <HeroAvatar heroId={heroId} />
        <HeroName heroId={heroId} />
      </div>
    );
  }
}

HeroBasics.propTypes = {
  heroId: T.number.isRequired,
};

export default HeroBasics;
