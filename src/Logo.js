import React from 'react';
import styled from 'styled-components';
import { spinning } from './css-animations';
import LogoElement from './LogoElement';


const LogoWrapper = styled.div`
  > svg.my-fancy-logo {
    height: 80px;
    animation: ${spinning} infinite 20s linear;

    g {
      fill: ${({ theme }) => theme.header === 'beerschot' ? 'white' : 'royalblue'};
    }
  }
`

export default () => (
  <LogoWrapper>
    <LogoElement />
  </LogoWrapper>
)