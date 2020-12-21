import React from "react";
// styles
import { HeaderNavWrapper } from "./styles";
// components
import PrimaryButton from "../Primary-button";

const HeaderNav = () => {
  return (
    <HeaderNavWrapper>
      <ul>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <PrimaryButton>Sign up</PrimaryButton>
        </li>
      </ul>
    </HeaderNavWrapper>
  );
};

export default HeaderNav;
