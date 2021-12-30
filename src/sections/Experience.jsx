import {
  Section,
  Header,
  HeaderBody,
  SubHeader,
  HeaderIcon,
} from "../components";
import { FaBriefcase } from "react-icons/fa";

const COLOR = "blue";

export function Experience() {
  return (
    <Section>
      <HeaderIcon icon={FaBriefcase} color={COLOR} />
      <SubHeader color={COLOR}>Work experience</SubHeader>
      <Header>Full stack developer</Header>
      <HeaderBody>
        I'm a developer and photographer. I've been working as a developer for
        over a year and a half, and I've been a photographer for about a year.
        I've been working on a few projects, but I'm always looking for new
        challenges.
      </HeaderBody>
    </Section>
  );
}
