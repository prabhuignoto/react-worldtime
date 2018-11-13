import * as React from "react";
import Styled from "styled-components";
import { ReactComponent as Globe } from "../assets/globe.svg";

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
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
`;

const Icon = Styled.i`
  width: 2rem;
  height: 2rem;
  display: block;
  position: relative;
  margin-left: 0.25rem;
`;

export default () => (
  <Header>
    <Logo>
      <span>Worldtime</span>
      <Icon>
        <Globe />
      </Icon>
    </Logo>
  </Header>
);
