import {
  Section,
  Header,
  SubHeader,
  HeaderBody,
  HeaderIcon,
} from "../components";
import { FaBolt } from "react-icons/fa";

const COLOR = "purple";

export function Projects() {
  return (
    <Section align="left">
      <HeaderIcon icon={FaBolt} color={COLOR} />
      <SubHeader color={COLOR}>Projects</SubHeader>
      <Header>Collection of personal projects</Header>
      <HeaderBody>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat at
        laudantium ipsum, voluptate quae eligendi eaque ratione.
      </HeaderBody>
    </Section>
  );
}
