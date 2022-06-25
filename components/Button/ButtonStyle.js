import styled from "styled-components";
export const ButtonWrapper = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#d0d0d7")};
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  border: none;
  padding: 8px;
  /* margin-top: 35px; */
  width: ${({ width }) => (width ? width : "100%")};
  font-weight: 500;
  overflow: hidden;
  border-radius: 3px;
  transition: 0.5s;
`;
