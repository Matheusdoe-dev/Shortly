import React from "react";
// imgs
import facebookImg from "../../assets/images/icon-facebook.svg";
import twitterImg from "../../assets/images/icon-twitter.svg";
import pinterestImg from "../../assets/images/icon-pinterest.svg";
import instagramImg from "../../assets/images/icon-instagram.svg";
// styles
import { SocialMediasWrapper } from "./styles";

const socialMedias = [
  {
    icon: facebookImg,
    link: "https://facebook.com",
    alt: "Facebook",
  },
  {
    icon: twitterImg,
    link: "https://twitter.com",
    alt: "Twitter",
  },
  {
    icon: pinterestImg,
    link: "https://pinterest.com",
    alt: "Pinterest",
  },
  {
    icon: instagramImg,
    link: "https://instagram.com",
    alt: "Instagram",
  },
];

const SocialMedias = () => {
  return (
    <SocialMediasWrapper>
      <ul>
        {socialMedias.map(({ icon, link, alt }, index) => (
          <li key={index}>
            <a href={link} target="BLANK">
              <img src={icon} alt={alt} />
            </a>
          </li>
        ))}
      </ul>
    </SocialMediasWrapper>
  );
};

export default SocialMedias;
