import React from "react";
// styles
import { PrimaryButtonWrapper } from "./styles";

const PrimaryButton = ({ children, ...props }) => {
  return <PrimaryButtonWrapper {...props}>{children}</PrimaryButtonWrapper>;
};

export default PrimaryButton;
