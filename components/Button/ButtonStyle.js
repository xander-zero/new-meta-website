import styled from "styled-components";
export const ButtonWrapper = styled.button`
  background-color: #d0d0d7;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  border: none;
  padding: 5px;
  margin-top: 35px;
  width: 100%;
  font-weight: 500;
  overflow: hidden;
  border-radius: 3px;
  transition: 0.5s;
  &:hover {
    background-color: #f0f0f0;
  }
`;
