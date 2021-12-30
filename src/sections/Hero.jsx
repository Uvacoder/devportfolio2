import {
  Title,
  TitleBody,
  Section,
  Button,
  AltButton,
  CodeEditor,
} from "../components";
import { FaRegEnvelope, FaArrowDown } from "react-icons/fa";
import { HStack } from "@chakra-ui/react";

const COLOR = "pink";

export function Hero() {
  return (
    <Section align="center">
      <Title>Hello, I'm Tanner Thomas!</Title>
      <TitleBody>
        I'm a self-taught frontend developer based in Salt Lake City, Utah. My
        goal is to create engaging experiences for users, with a fine balance of
        technology and design.
      </TitleBody>
      <HStack spacing="6" pb="16">
        <Button icon={FaRegEnvelope}>Contact</Button>
        <AltButton icon={FaArrowDown}>Resume</AltButton>
      </HStack>
      <CodeEditor />
    </Section>
  );
}
