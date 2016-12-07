import React from 'react';

import styled from 'styled-components';

const FigureContianer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;
const Figure = styled.img`
  height: 100%;
  width: 100%;
`;
const figureSrc = require('../../assets/dota.jpg');

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FigureContianer>
          <Figure src={figureSrc} alt="Figure of DotA" />
        </FigureContianer>
      </div>
    );
  }
}
