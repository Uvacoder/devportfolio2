import {
  Section,
  Header,
  HeaderBody,
  HeaderIcon,
  SubHeader,
  SectionHeader,
} from "../../components";
import { icons } from "./data/icons";
import { FaWrench } from "react-icons/fa";
import { Icons } from "./components/Icons";
import { HStack, VStack } from "@chakra-ui/react";

export function Skills() {
  return (
    <Section align="left" id="skills">
      <SectionHeader
        icon={FaWrench}
        color="green"
        subHeader="Technology"
        header="Skills"
      />
      <HeaderBody>
        I have experience with the following technologies:
      </HeaderBody>
      <Icons icons={icons} />
    </Section>
  );
}
