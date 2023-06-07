import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2348167105986">+2348167105986</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:fujinzeken@yahoo.com">
            fujineken@yahoo.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>You dream it, I build it!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/fujinzeken" target="blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/micheal-tijani-3a80331aa/"
            target="blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
