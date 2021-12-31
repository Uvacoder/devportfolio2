import {
  Title,
  TitleBody,
  Section,
  Button,
  AltButton,
  CodeEditor,
} from "../components";
import { FaRegEnvelope, FaArrowDown } from "react-icons/fa";
import { Stack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const words = ["a developer.", "a photographer.", "Tanner!"];
const Typing = Typewriter;

export function Hero() {
  return (
    <Section align="center">
      <Stack
        direction={["column", "column", "column", "row"]}
        justify="center"
        align="center"
        mb="24px"
      >
        <Title>Hello, I'm&#160;</Title>
        <Title>
          <Typing
            options={{
              wrapperClassName: "typewriter",
              strings: words,
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          />
        </Title>
      </Stack>
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
      <CodeEditor
        text={
          <Typing
            options={{
              strings: words,
              autoStart: true,
              loop: true,
            }}
          />
        }
      />
    </Section>
  );
}
