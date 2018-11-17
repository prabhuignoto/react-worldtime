import Styled from "styled-components";
import Posed from "react-pose";

export const List = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const ListLabel = Styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  padding: 0.75rem 0.5rem 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  width: 100%;
  background: rgba(0, 128, 255, 0.03);
  color: #007FFE;
  box-shadow: inset 0 0 20px 5px rgba(0, 128, 255, 0.058);
`;

export const PosedListLabel = Posed(ListLabel)({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.99 }
});

export const ListWrapper = Styled.div`
  display: flex;
  margin : 0.5rem 0.5rem;
  position: relative;
  min-width: 350px;
  width: 0;
  padding: 1rem;
  
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0rem;
    min-width: 96%;
  }
`;

export const ListContainer = Styled.div`
  position: absolute;
  left: 1rem;
  top: 5rem;
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  background: #fff;
  z-index: 200;
  box-shadow: 0 2px 10px 1px rgba(0,0,0,0.35);
  
  @media (min-width: 320px) and (max-width: 480px) {
    top: 2rem;
    left: 0rem;
    position: fixed;
    /* height: 90vh; */
    min-height: 90vh;
    max-height: auto;
    width: 90%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5rem 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    min-height: 300px;
    max-height: 350px;
  }
  @media (min-width: 1281px) {
    max-height: 550px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    max-height: 300px;
  }
`;

export const PosedListContainer = Posed(ListContainer)({
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0.5
  }
});

export const Searchbox = Styled.input`
  width: 95%;
  padding: 0.25rem 0;
  height: 30px;
  margin: 0.25rem 0;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding-left: 0.25rem;
  outline: none;
  font-size: 1rem;
`;

export const Icon = Styled.i`
  width: 1.75rem;
  height: 1.75rem;
  display: block;
  position: relative;
  margin-left: auto;
`
