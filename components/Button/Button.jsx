import React from "react";
import { ButtonWrapper } from "./ButtonStyle";

const Button = ({
  className,
  children,
  bgColor,
  color,
  size,
  width,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      className={className}
      bgColor={bgColor}
      color={color}
      size={size}
      width={width}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
