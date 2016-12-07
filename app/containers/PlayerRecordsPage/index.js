import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import {
  selectLoadingPlayerRecords,
  selectLoadPlayerRecordsError,
  selectPlayerRecords,
} from './selectors';
import { loadPlayerRecords } from './actions';

import Records from '../../components/Records';

export class PlayerRecordsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const playerId = 121230511;
    this.props.fetchPlayerRecords(playerId);
  }

  renderRecords() {
    const { records } = this.props;
    const { loadingPlayerRecords, loadPlayerRecordsError } = this.props;
    if (loadingPlayerRecords) {
      return (<div>Loading...</div>);
    } else if (loadPlayerRecordsError) {
      return (<div>Loading error!</div>);
    } else if (records.kda) {
      return <Records {...records} />;
    }
    return (<div></div>);
  }

  render() {
    return (
      <div>
        <Helmet
          title="玩家个人记录"
          meta={[
            { name: 'description', content: '玩家个人记录' },
          ]}
        />
        {this.renderRecords()}
      </div>
    );
  }
}

PlayerRecordsPage.propTypes = {
  records: T.object,
  fetchPlayerRecords: T.func,
  loadingPlayerRecords: T.bool,
  loadPlayerRecordsError: T.bool,
};

const mapStateToProps = createStructuredSelector({
  loadingPlayerRecords: selectLoadingPlayerRecords(),
  loadPlayerRecordsError: selectLoadPlayerRecordsError(),
  records: selectPlayerRecords(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPlayerRecords(playerId) {
      dispatch(loadPlayerRecords(playerId));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerRecordsPage);
