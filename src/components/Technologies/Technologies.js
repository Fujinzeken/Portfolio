import React from "react";
import { DiDocker, DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web developement world,
      from frontend to Backend and even some DevOps
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js, Nestjs, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br /> Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
