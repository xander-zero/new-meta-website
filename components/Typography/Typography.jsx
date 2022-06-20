import styled from "styled-components";

const Typography = ({
  size,
  color,
  weight,
  children,
  className,
  textAlign,
  en,
}) => {
  return (
    <Text
      size={size}
      color={color}
      weight={weight}
      className={className}
      textAlign={textAlign}
      en={en}
    >
      {children}
    </Text>
  );
};

const Text = styled.p`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "justify")};
  font-family: ${({ en }) => (en ? "Arial" : "IRANSans")};
`;

export default Typography;
