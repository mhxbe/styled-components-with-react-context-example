import React from 'react';
import styled from 'styled-components';

const Intro = styled.p`
  font-size: large;
  color: ${props => props.theme.content === 'beerschot' ? 'rebeccapurple' : 'royalblue'};
`

export default props => (
  <Intro>
    To get started, edit <code>src/App.js</code> and save to reload.
  </Intro>
);
