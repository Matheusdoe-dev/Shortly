import React from "react";
// styles
import { MobileMenuWrapper } from "./styles";
// components
import PrimaryButton from "../Primary-button";

const navItens = [
  { label: "Features", link: "/" },
  { label: "Pricing", link: "/" },
  { label: "Resources", link: "/" },
  { label: "Login", link: "/" },
];

const MobileMenu = () => {
  return (
    <MobileMenuWrapper data-anime="menu-mobile">
      <ul>
        {navItens.map(({ label, link }, index) => (
          <li key={index}>
            <a href={link}>{label}</a>
          </li>
        ))}
        <li>
          <PrimaryButton>Sign Up</PrimaryButton>
        </li>
      </ul>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
