import React, { useState, useEffect } from "react";
// styles
import { NavToggleWrapper } from "./styles";

const NavToggle = () => {
  const [status, setStatus] = useState(false);

  const handleActive = () => {
    status === false ? setStatus(true) : setStatus(false);
  };

  useEffect(() => {
    const navToggle = document.querySelector('[data-anime="nav-toggle"]');
    const menuMobile = document.querySelector('[data-anime="menu-mobile"]');

    if (status) {
      navToggle.classList.add("active");
      menuMobile.classList.add("active");
    } else {
      navToggle.classList.remove("active");
      menuMobile.classList.remove("active");
    }
  }, [status]);

  return (
    <NavToggleWrapper
      onClick={handleActive}
      data-anime="nav-toggle"
    ></NavToggleWrapper>
  );
};

export default NavToggle;
