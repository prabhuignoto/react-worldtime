import * as React from "react";
import { ReactComponent as Globe } from "../../assets/globe.svg";
import { ReactComponent as Bars } from "../../assets/bars.svg";
import {
  Header as HeaderContainer,
  Burger,
  Logo,
  Icon,
  Home
} from "../header-styles";

interface IHeader {
  handleBurger: () => void;
  handleHome: () => void;
}

const Header: React.SFC<IHeader> = ({ handleBurger, handleHome }) => (
  <HeaderContainer data-testid="header-test">
    <Burger onClick={handleBurger} className="burger">
      <Bars />
    </Burger>
    <Home onClick={handleHome} className="home-link">Switch to your Timezone</Home>
    <Logo>
      <span>WorldTime</span>
      <Icon>
        <Globe />
      </Icon>
    </Logo>
  </HeaderContainer>
);

export default Header;
