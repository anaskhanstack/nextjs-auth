import styled from "styled-components";

interface IStyled {
  primary?:Boolean;
  blue?:Boolean
}

export const Error = styled.p.attrs({
  className: "text-xs text-red-500  mb-2 w-10/12",
})``;

export const LineHorizontal = styled.div.attrs({
  className: `border-2 w-1/5 mb-2`,
})`
  border-color: ${(props:IStyled) => (props.blue ? "rgb(123,178,231)" : "white")};
`;

export const Title = styled.h1.attrs({
  className: `text-3xl font-bold mb-2"`,
})`
  color: ${(props:IStyled) => (props.primary ? "rgb(123,178,231)" : "white")};
`;
