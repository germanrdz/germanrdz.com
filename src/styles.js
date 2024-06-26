import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
  font-size: 0.8em;
`;
