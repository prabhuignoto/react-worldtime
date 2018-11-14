import styled from "styled-components";
import Posed from "react-pose";

export const CloseIcon = styled.i`
  display: block;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const Entry = styled.li`
  padding: 1rem 0;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: rgba(0, 127, 254, 0.85);
    color: #fff;
  }
`;

export const PosedEntry = Posed(Entry)({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  background: #fff;
  box-shadow: 2px 0px 5px 1px rgba(0, 0, 0, 0.35);
  z-index: 999;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 70%;
  }

  h1 {
    font-size: 2rem;
    color: #007FFE;
  }
`;

export const PosedSidebar = Posed(SideBar)({
  open: { width: "350px", delayChildren: 200, staggerChildren: 50 },
  closed: { width: "0px" }
});

export const FavoriteWrapper = styled.ul`
  margin: 0;
  padding: 0.1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 2rem;
`;

export const PosedFavWrapper = Posed(FavoriteWrapper)({
  open: { width: "auto" },
  closed: { width: "0px" }
});