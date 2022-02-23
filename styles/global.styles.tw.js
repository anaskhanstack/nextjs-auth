import styled from "styled-components";

export const Error = styled.p.attrs({
    className: "text-xs text-red-500  mb-2 w-10/12"
  })``;

export const LineHorizontal = styled.div.attrs({
  className: `border-2 w-1/5 mb-2`
})`
  border-color: ${props=>props.blue ?'rgb(123,178,231)': 'white'}
`;