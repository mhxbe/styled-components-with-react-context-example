import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`

  .theme-switcher {
    background: transparent;
    border: 3px double;
    border-radius: 0;
    position: absolute;
    right: 24px;
    top: 24px;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: 0;
    }
    ${props => props.theme.header === 'beerschot'
      ? `
        background: royalblue;
        border-color: gold;
        color: gold;
      ` : `
        background: rebeccapurple;
        border-color: white
        color: white;
      `
    }
  }
`

export default ({ theme, toggleTheme }) => (
  <Navigation>
    <button
      onClick={toggleTheme}
      className="theme-switcher"
    >
      {theme === 'beerschot' ? 'Wilrijk' : 'Beerschot'}
    </button>
  </Navigation>
);