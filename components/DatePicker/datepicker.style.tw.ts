import styled from "styled-components";

interface IStyled {
  error:Boolean
}

export const Date = styled.div.attrs({
  className: `bg-gray-100 w-10/12  p-2 mb-2 flex items-center`,
})`
  border: ${(props:IStyled) => (props.error ? "1px solid red" : "unset")};
`;


export const Input = styled.input.attrs({
  className: `bg-gray-100 outline-none w-full`,
})`
 `;
