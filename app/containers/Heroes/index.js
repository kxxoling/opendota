import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectHeroes from './selectors';
import styled from 'styled-components';

import HeroesList from '../../components/HeroesList';
import heroes from '../../mocks/Heroes.json';

const Title = styled.h2`
  line-height: 36px;
  margin-left: 35px;
  padding-left: 20px;
  border-left: 5px solid #66f;
`;

export class Heroes extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <Helmet
          title="全部英雄"
          meta={[
            { name: 'description', content: 'DotA2 全部英雄' },
          ]}
        />
        <Title>全部英雄：</Title>
        <HeroesList heroes={heroes} />
      </div>
    );
  }
}

const mapStateToProps = selectHeroes();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
