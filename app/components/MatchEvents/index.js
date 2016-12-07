import React, { PropTypes as T } from 'react';

class MatchEvents extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { match } = this.props;

    return (
      <div>
        <div>一血时间：{match.first_blood_time}</div>
        <div>团战：</div>
      </div>
    );
  }
}

MatchEvents.propTypes = {
  match: T.object,
};

export default MatchEvents;
