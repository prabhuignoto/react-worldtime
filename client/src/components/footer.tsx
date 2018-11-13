import * as React from "react";
import Styled from "styled-components";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";

const Footer = Styled.footer`
  /* height: 50px; */
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: auto;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 1rem 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem 0;
    padding-right: 1rem;
  }
`;

const Social = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SocialLink = Styled.li`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 0.5rem;

  a {
    width: 1rem;
    height: 1rem;
    position: relative;
    display: block;
  }
`;

const Copyright = Styled.div`
  font-size: 0.9rem;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 1rem;
  }
  `;

const Icon = Styled.i`
  display: block;
  width: 1rem;
  height: 1rem;
  position: relative;
  margin-left: 0.25rem;
  `;

const Design = Styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: 2rem;
`;

export default () => (
  <Footer>
    <Social>
      <SocialLink>
        <a href="https://twitter.com/prabhumurthy2" target="new">
          <Twitter />
        </a>
      </SocialLink>
      <SocialLink>
        <a href="https://github.com/prabhuignoto">
          <Github />
        </a>
      </SocialLink>
    </Social>
    <Design>
      <span>Designed & Developed with</span>{" "}
      <Icon>
        <Heart />
      </Icon>
    </Design>
    <Copyright>
      2018 &copy;{" "}
      <a href="https://prabhumurthy.com" target="new">
        prabhumurthy.com
      </a>
    </Copyright>
  </Footer>
);
