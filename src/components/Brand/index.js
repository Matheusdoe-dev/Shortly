import React from "react";
// imgs
import logo1Img from "../../assets/images/logo.svg";
import logo2Img from "../../assets/images/logo-2.svg";
// styles
import { BrandWrapper } from "./styles";

const logos = {
  primary: logo1Img,
  secondary: logo2Img,
};

const Brand = ({ secondary, center }) => {
  return (
    <BrandWrapper href="/" className={center ? `center` : ``}>
      {secondary ? (
        <img src={logos.secondary} alt="Shortly" />
      ) : (
        <img src={logos.primary} alt="Shortly" />
      )}
    </BrandWrapper>
  );
};

export default Brand;
