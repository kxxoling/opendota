import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import {
  selectPlayerId,
} from './selectors';
import Navigator from '../../components/Navigator';

const Container = styled.div`
  margin-top: 70px;
`;

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet
          title="App"
          meta={[
            { name: 'description', content: 'Description of App' },
          ]}
        />
        <Navigator />
        <Container>
          {React.Children.toArray(this.props.children)}
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  playerId: T.number,
};

const mapStateToProps = createStructuredSelector({
  playerId: selectPlayerId(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
