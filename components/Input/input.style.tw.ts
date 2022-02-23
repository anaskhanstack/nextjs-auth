import styled from "styled-components";

interface IStyled {
  error?:Boolean
}

export const InputField = styled.div.attrs({
  className: `bg-gray-100 w-10/12  p-2 mb-2 flex items-center`,
})`
  border: ${(props:IStyled) => (props.error ? "1px solid red" : "unset")};
`;

export const InputUI = styled.input.attrs({
  className: `bg-gray-100 outline-none w-full`,
})``;
