import styled from "styled-components";
export const InputFieldWrapper = styled.div`
  input {
    width: 100%;
    border: none;
    font-size: 14px;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    color: 12px;
    /* &:focus-visible {
      border: 1px solid #e4e7eb;
      box-shadow: none;
      outline: none;
    }
    ::placeholder {
      color: #000 !important;
      font-size: 10px;
    } */
  }
  .line {
    border: 1px solid #dad8e0;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #3e1f92;
  font-weight: bold;
`;
