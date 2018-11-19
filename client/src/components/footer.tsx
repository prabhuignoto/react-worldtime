import * as React from "react";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import {
  Copyright,
  Design,
  Footer,
  Icon,
  Social,
  SocialLink
} from "./footer-styles";

export default () => (
  <Footer data-testid="footer-test">
    <Social className="footer-social">
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
    <Design className="footer-design">
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
