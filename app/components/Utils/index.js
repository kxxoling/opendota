import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
`;

export const Column = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 32px;
  padding-left: 20px;
  padding-right: 20px;

  &:nth-child(odd) {
    background-color: #424242;
  }
`;

export const Cell = styled.div`
  display: inline-block;
  width: ${(props) => props.width}px;
`;
