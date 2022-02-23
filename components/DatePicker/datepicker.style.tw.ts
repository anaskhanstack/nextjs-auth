import styled from "styled-components";

export const Date = styled.div.attrs({
  className: `bg-gray-100 w-10/12  p-2 mb-2 flex items-center`,
})`
  border: ${(props:any) => (props.error ? "1px solid red" : "unset")};
`;

