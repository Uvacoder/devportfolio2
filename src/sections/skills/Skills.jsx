import {
  Section,
  Header,
  HeaderBody,
  HeaderIcon,
  SubHeader,
} from "../../components";
import { icons } from "./data/icons";
import { FaWrench } from "react-icons/fa";
import { Icons } from "./components/Icons";

export function Skills() {
  return (
    <Section align="left" id="skills">
      <HeaderIcon icon={FaWrench} color="green" />
      <SubHeader color="green">Technology</SubHeader>
      <Header>Skills</Header>
      <HeaderBody>
        I have experience with the following technologies:
      </HeaderBody>
      <Icons icons={icons} />
    </Section>
  );
}
