import React from "react";
import { ButtonWrapper } from "./ButtonStyle";

const Button = ({ children, bgColor, color, size }) => {
  return (
    <ButtonWrapper bgColor={bgColor} color={color} size={size}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
