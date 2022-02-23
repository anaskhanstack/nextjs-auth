import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "bg-gray-100 min-h-screen",
})``;

export const Navbar = styled.div.attrs({
  className: "flex-1 flex flex-col w-full",
})`
 position: fixed;
`;

export const Nav = styled.nav.attrs({
  className:
    "px-4 flex justify-between  h-16 border-b-2 bg-gradient-to-r from-blue-500 to-blue-300",
})``;

export const PrimaryBtn = styled.button.attrs({
  className: "bg-blue-300 text-white rounded-full px-12 py-2 my-2",
})``;

export const SecondaryBtn = styled.button.attrs({
  className: "border-2 border-white rounded-full px-12 py-2",
})``;

export const SideSection = styled.div.attrs({
  className:
    "bg-gradient-to-r from-blue-400 to-blue-300 flex flex-col items-center text-white rounded-tr-2xl rounded-br-2xl py-36 px-12",
})``;
