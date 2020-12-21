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
      {error && <span>{error}</span>}
    </InputWrapper>
  );
};

export default Input;
