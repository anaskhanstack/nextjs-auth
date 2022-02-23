import React from "react";
import { ButtonUI } from "./button.style.tw";

interface IButton {
  type?: string;
  onClick?: () => void;
  isPrimary?: Boolean;
}

const Button = ({ onClick, type, isPrimary }: IButton) => {
  return (
    <ButtonUI onClick={onClick} type={type} isPrimary={isPrimary}>
      Sign Up
    </ButtonUI>
  );
};

export default Button;
