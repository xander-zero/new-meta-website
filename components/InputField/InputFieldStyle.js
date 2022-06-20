import styled from "styled-components";
export const InputFieldWrapper = styled.div`
  input {
    width: 100%;
    border: 1px solid #e4e7eb;
    font-size: 14px;
    padding: 5px;
    border-radius: 5px;
    &:focus-visible {
      border: 1px solid #e4e7eb;
      box-shadow: none;
      outline: none;
    }
    ::placeholder {
      color: #000 !important;
      font-size: 10px;
    }
  }
`;
