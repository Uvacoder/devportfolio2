import {
  Title,
  TitleBody,
  Section,
  Button,
  AltButton,
  CodeEditor,
} from "../components";
import { FaRegEnvelope, FaArrowDown } from "react-icons/fa";
import { HStack, Stack } from "@chakra-ui/react";
import { useTypeWriter } from "../hooks/useTypeWriter";

const COLOR = "pink";
const phrase = "I'm Tanner Thomas!";

const words = [
  { text: "a developer", color: "pink" },
  { text: "a photographer", color: "purple" },
  { text: "a human", color: "blue" },
  { text: "Tanner", color: "green" },
];

export function Hero() {
  const [text, index] = useTypeWriter(words, 100);

  return (
    <Section align="center">
      <Title color={`${words[index].color}.400`}>Hello, I'm {text}</Title>
      <TitleBody>
        I'm a self-taught frontend developer based in Salt Lake City, Utah. My
        goal is to create engaging experiences for users, with a fine balance of
        technology and design.
      </TitleBody>
      <Stack
        direction={["column", "column", "row"]}
        spacing="6"
        pb="16"
        w="full"
        justify="center"
      >
        <Button icon={FaRegEnvelope}>Contact</Button>
        <AltButton icon={FaArrowDown}>Resume</AltButton>
      </Stack>
      <CodeEditor text={"text"} />
    </Section>
  );
}
