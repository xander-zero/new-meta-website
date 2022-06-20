import { useRouter } from "next/router";
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
  const router = useRouter();

  return (
    <Text
      size={size}
      color={color}
      weight={weight}
      className={className}
      textAlign={
        textAlign ? textAlign : router.locale === "fa" ? "justify" : ""
      }
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
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  font-family: ${({ en }) => (en ? "Arial" : "IRANSans")};
`;

export default Typography;
