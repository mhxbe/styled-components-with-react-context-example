import React, { Component } from 'react';
import styled from 'styled-components';
import ThemeContext from './theme-context';
import Header from './Header';
import Content from './Content';

const AppWrapper = styled.div`
  text-align: center;
  height: 100%;
`

class App extends Component {
  state = {
    theme: 'beerschot', // wilrijk
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'beerschot' ? 'wilrijk': 'beerschot',
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <AppWrapper>
          <Header toggleTheme={this.toggleTheme} />
          <Content />
        </AppWrapper>
      </ThemeContext.Provider>
    );
  }
}

export default App;
