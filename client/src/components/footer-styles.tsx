import Styled from "styled-components";

export const Footer = Styled.footer`
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
}
`;

export const Social = Styled.ul`
list-style: none;
margin: 0;
padding: 1rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;

export const SocialLink = Styled.li`
width: 1.2rem;
height: 1.2rem;
margin: 0 0.75rem;

a {
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  display: block;
}
`;

export const Copyright = Styled.div`
font-size: 0.9rem;
@media (min-width: 320px) and (max-width: 480px) {
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) and (max-width: 1024px) {
  margin-right: 2rem;
}
`;

export const Icon = Styled.i`
display: block;
width: 1rem;
height: 1rem;
position: relative;
margin-left: 0.25rem;
`;

export const Design = Styled.div`
font-size: 0.9rem;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: auto;
margin-right: 2rem;
`;
