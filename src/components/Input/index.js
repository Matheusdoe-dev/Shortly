import React from "react";
// styles
import { InputWrapper } from "./styles";

const Input = ({ label, name, value, ...props }) => {
  return (
    <InputWrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} name={name} value={value} {...props} />
    </InputWrapper>
  );
};

export default Input;
