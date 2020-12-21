import React from "react";
import { FooterNavWrapper } from "./styles";

const FooterNav = ({ title, options }) => {
  return (
    <FooterNavWrapper>
      <h3>{title}</h3>
      <ul>
        {options.map(({ label, link }, index) => (
          <li key={index}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </FooterNavWrapper>
  );
};

export default FooterNav;
