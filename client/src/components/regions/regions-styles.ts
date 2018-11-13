import Styled from "styled-components";
import Posed from "react-pose";

export const List = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0.5rem 0;
  }
`;

export const ListPosed = Posed(List)({
  open: {
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { delay: 300 },
  initialPose: "closed"
});

export const ListItem = Styled.li<{ selected: boolean }>`
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  border-color: ${p => (p.selected ? "#0080FF" : "")};
  margin: 0 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: ${p => (p.selected ? "rgba(0, 128, 255, 0.05)" : "")};
  color: ${p => p.selected ? "#0080FF": "#000"};
  user-select: none;
  flex-basis: 1;
  span {
    text-transform: capitalize;
    flex: 1;
    height: 100%;
    width: 100%;
    margin: 0.2rem 0;
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0.5rem 0;
    margin: 0.5rem;
    flex: 1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.5rem 0;
    margin: 0.5rem;
    flex-basis: 15%;
  }
  @media (min-width: 1281px) {
    flex: 1;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    flex: 1;
  }
  
`;

export const ListItemPosed = Posed(ListItem)({
  open: {
    opacity: 1,
    transform: 'scale(1)'
  },
  close: {
    opacity: 0,
    transform: 'scale(0)'
  }
});

export const Icon = Styled.i`
  display: block;
  width: 8rem;
  height: 5rem;
  position: relative;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 3rem;
  }
`;
