import React from "react";
import { InputFieldWrapper, Label } from "./InputFieldStyle";
const InputField = ({ label, type, onChange, placeholder }) => {
  return (
    <InputFieldWrapper>
      {label ? <Label>{label}</Label> : null}
      <input type={type} onChange={onChange} placeholder={placeholder} />
      <div className="line"></div>
    </InputFieldWrapper>
  );
};

export default InputField;
