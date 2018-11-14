import styled from "styled-components";

export const ListItem = styled.li<{nohover?: boolean}>`
  padding: 1rem;
  display: flex;
  white-space: nowrap;
  text-align: left;
  overflow-x: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: ${p => !p.nohover ? '#0080FF' : ''};
    color: #fff;
  }
`;