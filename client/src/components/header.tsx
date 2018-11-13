import * as React from "react";
import Styled from "styled-components";
import { ReactComponent as Globe } from "../assets/globe.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import { Subscribe } from "unstated";
import SidebarState from "./sidebar/sidebarState";

const Header = Styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  height: 40px;
  width: 100%;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0rem;
  }
  `;

const Logo = Styled.i`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left: auto;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
`;

const Icon = Styled.i`
  width: 2rem;
  height: 2rem;
  display: block;
  position: relative;
  margin-left: 0.25rem;
`;

const Burger = Styled.i`
  display: block;
  width: 2rem;
  height: 2rem;
  position: relative;
  align-self: flex-start;
  cursor: pointer;
`;

export default () => (
  <Header>
    <Subscribe to={[SidebarState]}>
      {(stateCntr: SidebarState) => {
        return (
          <Burger onClick={() => {
            stateCntr.toggleSidebar();
          }}>
            <Bars />
          </Burger>
        );
      }}
    </Subscribe>
    <Logo>
      <span>WorldTime</span>
      <Icon>
        <Globe />
      </Icon>
    </Logo>
  </Header>
);
