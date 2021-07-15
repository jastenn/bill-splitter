import styled from "styled-components";

export const AttributionContainer = styled.div`
  font-size: 11px;
  text-align: center;
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  & a {
    color: ${({theme}) => theme.neutralVeryDarkCyan};
  }
`

/*
.attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
*/