import React from "react";
import { ButtonWrapper } from "./ButtonStyle";

const Button = ({ children, bgColor, color, size, width }) => {
  return (
    <ButtonWrapper bgColor={bgColor} color={color} size={size} width={width}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
