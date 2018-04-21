import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeContext from './theme-context';
import Title from './Title';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = styled.header`
  background-color: ${props => props.theme.header === 'beerschot' ? 'rebeccapurple' : 'gold'};
  height: 150px;
  padding: 20px;
`

export default ({ toggleTheme }) => (
  <ThemeContext.Consumer>
    { theme => (
      <ThemeProvider theme={{ header: theme }}>
        <Header>
          <Logo />
          <Title>Welcome To <span className="capitalize">{theme}</span></Title>
          <Navigation theme={theme} toggleTheme={toggleTheme} />
        </Header>
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);