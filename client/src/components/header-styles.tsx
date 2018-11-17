import Styled from "styled-components";

export const Header = Styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  height: 40px;
  width: 100%;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 0;
  }
  `;

export const Logo = Styled.i`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left: auto;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
`;

export const Icon = Styled.i`
  width: 2rem;
  height: 2rem;
  display: block;
  position: relative;
  margin-left: 0.5rem;
`;

export const Burger = Styled.i`
  display: block;
  width: 2rem;
  height: 2rem;
  position: relative;
  align-self: flex-start;
  cursor: pointer;
  margin: 0.5rem;
`;

export const Home = Styled.a`
  text-decoration: none;
  margin: 0.2rem 1rem 0;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #007FFE;
  }
`;