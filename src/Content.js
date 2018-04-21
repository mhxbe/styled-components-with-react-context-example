import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeContext from './theme-context';
import Intro from './Intro';

const Content = styled.section`
  height: 100%;
  overflow: auto;
  background-color: white;
`

export default (props) => (
  <ThemeContext.Consumer>
    { theme => (
      <ThemeProvider theme={{ content: theme }}>
        <Content>
          <Intro />
        </Content>
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);