import Posed from "react-pose";
import Styled from "styled-components";

export const DetailsWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  width: 100%;
  position: relative;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0.1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }
  min-height: 500px;
  /* height: 100%; */
`;

export const PosedDetailsWrapper = Posed(DetailsWrapper)({
  open: {
    opacity: 1
  },
  close: {
    opacity: 0
  }
});

export const DST = Styled.div`
`;

export const DateTime = Styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: left;

  i {
    width: 2rem;
    height: 2rem;
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }

  a {
    margin-left: 0.5rem;
    font-size: 0.8rem;
    text-decoration: none;
    color: rgba(0,0,0,0.7);
    font-weight: 600;
    margin-top: 0.25rem;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2rem;
    padding-left: 0.5rem;
    flex-wrap: wrap;

    a {
      margin-left: 0.1rem;
      margin-top: 0.2rem;
    }
  }
`;

export const Time = Styled.time`
  font-size: 1.25rem;
  color: #0080FF;
  margin: 0 0.25rem;
`

export const Label = Styled.span`
  font-size: 1.2rem;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem;
  font-weight: 500;
`;

export const Fact = Styled.div`
  font-size: 1rem;
  font-weight: normal;
  padding: 2rem 0;
  padding-left: 0.5rem;
  border-bottom: 1px solid #ddd;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background: rgba(0,0,0,0.02);
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Icon = Styled.i`
  width: 2rem;
  height: 2rem;
  display: block;
  position: relative;
  margin-right: 0.75rem;
`;

export const Mark = Styled.span`
  color: #0080FF;
  font-weight: 500;
`

export const Unix = Styled.div``;

export const Loading = Styled.i`
  width: 4rem;
  height: 4rem;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;

  svg {
    height: 80%;
    width: 80%;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    transform: translateY(-50%);
  }
`