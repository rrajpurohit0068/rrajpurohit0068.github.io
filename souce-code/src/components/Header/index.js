import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import LogoImg from './logo.png';

const HeaderContainer = styled.div`
  display: flex;
  height: 16rem;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderContainer>
      <A href="/">
        <Img src={LogoImg} alt="Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;
