import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.header === 'beerschot' ? 'white' : 'royalblue'};
  font-size: 1.5em;

  .capitalize {
    display: inline-block;
    &:first-letter {
      display: inline-block;
      text-transform: uppercase;
    }
  }
`;

export default ({ children }) => (
  <Title>{children}</Title>
);