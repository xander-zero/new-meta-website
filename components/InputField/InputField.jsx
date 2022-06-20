import React from "react";
import { Label } from "../Select/SelectStyle";
import { InputFieldWrapper } from "./InputFieldStyle";

const InputField = ({ label, type, onChange, placeholder }) => {
  return (
    <InputFieldWrapper>
      {label ? <Label>{label}</Label> : null}
      <input type={type} onChange={onChange} placeholder={placeholder} />
    </InputFieldWrapper>
  );
};

export default InputField;
