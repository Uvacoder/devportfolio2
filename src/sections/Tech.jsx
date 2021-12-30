import { HStack, Tooltip, chakra } from "@chakra-ui/react";
import { DiReact, DiNodejs, DiPython } from "react-icons/di";

import { SiSvelte, SiTypescript, SiFlutter, SiDart } from "react-icons/si";

// const ICONS = [DiReact, SiSvelte, DiPython, DiNodejs];

const ICONS = [
  { icon: DiReact, label: "React", color: "blue.400" },
  { icon: SiSvelte, label: "Svelte", color: "orange.600" },
  { icon: DiPython, label: "Python", color: "yellow.500" },
  { icon: SiTypescript, label: "Typescript", color: "blue.600" },
  { icon: SiFlutter, label: "Flutter", color: "blue.300" },
  { icon: SiDart, label: "Dart", color: "blue.300" },
  { icon: DiNodejs, label: "Node", color: "green.600" },
];

export function Tech() {
  return (
    <HStack color="whiteAlpha.500" fontSize="40px" spacing="10">
      {ICONS.map((Icon) => (
        <Tooltip label={Icon.label}>
          <chakra.span
            transition="all 0.2s "
            _hover={{ color: Icon.color, cursor: "pointer" }}
          >
            <Icon.icon key={Icon.label} />
          </chakra.span>
        </Tooltip>
      ))}
    </HStack>
  );
}
