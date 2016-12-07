import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import {
  selectLoadingMatch,
  selectLoadMatchError,
  selectMatch,
} from './selectors';
import {
  loadMatch,
} from './actions';

import Match from '../../components/Match';
import MatchEvents from '../../components/MatchEvents';
import GoldExpGraph from '../../components/GoldExpGraph';

const Title = styled.h3`
  display: block;
`;

export class MatchDetailsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const matchId = 2775964686;
    this.props.fetchMatch(matchId);
  }
  renderMatch() {
    const { match, loadingMatch, loadMatchError } = this.props;
    if (loadMatchError) {
      return (<div>error</div>);
    } else if (loadingMatch) {
      return (<div>loading...</div>);
    } else if (match.players) {
      return (
        <div>
          <MatchEvents match={match} />
          <Match match={match} />
          <GoldExpGraph match={match} />
        </div>
      );
    }
    return <div></div>;
  }
  render() {
    const { match } = this.props;
    const win = (match.radiant_win && '天辉获胜') || '夜魇获胜';
    return (
      <div>
        <Helmet
          title="Match Details Page"
          meta={[
            { name: 'description', content: 'Description of MatchDetailsPage' },
          ]}
        />
        <Title>{win}</Title>
        {this.renderMatch()}
      </div>
    );
  }
}

MatchDetailsPage.propTypes = {
  match: T.object,
  fetchMatch: T.func,
  loadingMatch: T.bool,
  loadMatchError: T.bool,
};

const mapStateToProps = createStructuredSelector({
  loadingMatch: selectLoadingMatch(),
  loadMatchError: selectLoadMatchError(),
  match: selectMatch(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMatch(matchId) {
      dispatch(loadMatch(matchId));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetailsPage);
