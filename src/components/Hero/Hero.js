import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        My name is Micheal, a fullstack developer and web enthusiast. You dream
        it, I build it.
      </SectionText>
      <Button onclick={() => (window.location = "http://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
