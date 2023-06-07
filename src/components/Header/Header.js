import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Porfolio</Span>
        </a>
      </a>
    </Div1>
    <Div2>
      <li>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </li>
      <li>
        <a href="#tech">
          <NavLink>Technologies</NavLink>
        </a>
      </li>
      <li>
        <a href="#about">
          <NavLink>About Me</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/fujinzeken" target="blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/micheal-tijani-3a80331aa/"
        target="blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/windlord_fujin" target="blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
