import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import {
  selectLoadingMatches,
  selectLoadMatchesError,
  selectMatches,
} from './selectors';import {
  loadMatches,
} from './actions';

import MatchesList from '../../components/MatchesList';

export class PlayerMatchesListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const playerId = 121230511;
    this.props.fetchMatches(playerId);
  }

  renderMatches() {
    const { matches, loadingMatches, loadMatchesError } = this.props;
    if (loadMatchesError) {
      return (<div>error</div>);
    } else if (loadingMatches) {
      return (<div>loading...</div>);
    } else if (matches) {
      return (
        <MatchesList matches={matches} />
      );
    }
    return <div></div>;
  }

  render() {
    return (
      <div>
        <Helmet
          title="PlayerMatchesListPage"
          meta={[
            { name: 'description', content: 'Description of PlayerMatchesListPage' },
          ]}
        />
        {this.renderMatches()}
      </div>
    );
  }
}

PlayerMatchesListPage.propTypes = {
  matches: T.array,
  fetchMatches: T.func,
  loadingMatches: T.bool,
  loadMatchesError: T.bool,
};

const mapStateToProps = createStructuredSelector({
  loadingMatches: selectLoadingMatches(),
  loadMatchesError: selectLoadMatchesError(),
  matches: selectMatches(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMatches(playerId) {
      dispatch(loadMatches(playerId));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerMatchesListPage);
