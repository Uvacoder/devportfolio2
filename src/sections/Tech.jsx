import { HStack, Tooltip, chakra, Wrap } from "@chakra-ui/react";
import { DiReact, DiNodejs, DiPython, DiJavascript1 } from "react-icons/di";
import { FaWrench } from "react-icons/fa";
import {
  Section,
  Header,
  HeaderBody,
  HeaderIcon,
  SubHeader,
} from "../components";

import {
  SiSvelte,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiDart,
} from "react-icons/si";

// const ICONS = [DiReact, SiSvelte, DiPython, DiNodejs];

const ICONS = [
  { icon: DiReact, label: "React", color: "blue.400" },
  { icon: SiSvelte, label: "Svelte", color: "orange.600" },
  { icon: DiPython, label: "Python", color: "yellow.500" },
  { icon: SiTypescript, label: "Typescript", color: "blue.600" },
  { icon: SiJavascript, label: "Javascript", color: "yellow.300" },
  { icon: SiFlutter, label: "Flutter", color: "blue.300" },
  { icon: SiDart, label: "Dart", color: "blue.300" },
  { icon: DiNodejs, label: "Node", color: "green.600" },
];

export function Tech() {
  return (
    <Section align="left" id="skills">
      <HeaderIcon icon={FaWrench} color="green" />
      <SubHeader color="green">Technology</SubHeader>
      <Header>Skills</Header>
      <HeaderBody>
        I have experience with the following technologies:
      </HeaderBody>
      <Wrap
        w="100%"
        display="flex"
        spacing="1rem"
        justify="space-between"
        fontSize="32px"
        // maxW="2xl"
        pt="1rem"
      >
        {ICONS.map((Icon) => (
          <Tooltip label={Icon.label}>
            <chakra.span
              color={Icon.color}
              bg="#162032"
              p="1rem"
              rounded="lg"
              _hover={{ color: Icon.color, cursor: "pointer" }}
            >
              <Icon.icon key={Icon.label} />
            </chakra.span>
          </Tooltip>
        ))}
      </Wrap>
    </Section>
  );
}
