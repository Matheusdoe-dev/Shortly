import React from "react";
// styles
import { InputWrapper } from "./styles";

const Input = ({ label, name, value, error, ...props }) => {
  return (
    <InputWrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        className={error && "error"}
        name={name}
        value={value}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;
