import styled from "styled-components";

export const FavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 3px;
  user-select: none;
  margin: 0.25rem 0;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 0.2rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 1.5rem;
  }
  @media (min-width: 1281px) {
    margin-left: 1.5rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
  }
`;

export const Icon = styled.i`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  margin-right: 0.5rem;
`;