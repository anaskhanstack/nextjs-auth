import styled from "styled-components";

export const Container = styled.main.attrs({
  className:
    "flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100",
})``;

export const CardContainer = styled.div.attrs({
  className: "bg-white rounded-2xl shadow-2xl flex w-2/3  max-w-4xl",
})``;

export const Form = styled.form.attrs({
  className: "w-4/5 p-5 flex flex-col",
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

export const Logo = styled.div.attrs({
  className: "font-bold text-left",
})``;
