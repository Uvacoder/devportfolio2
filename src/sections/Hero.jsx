import {
  Title,
  TitleBody,
  Section,
  Button,
  AltButton,
  CodeEditor,
} from "../components";
import { useRef, useState } from "react";
import { FaRegEnvelope, FaArrowDown } from "react-icons/fa";
import { Stack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useTypeWriter } from "../hooks/useTypeWriter";
import { MotionGrid } from "../components/motion/MotionGrid";

// ! FIX TYPEWRITER

const words = ["a developer.", "a photographer.", "Tanner!"];
const Typing = Typewriter;

export function Hero() {
  const [text, setText] = useState("");

  return (
    <Section align="center">
      {/* <Typing
        options={{
          wrapperClassName: "typewriter",
          strings: words,
          autoStart: true,
          loop: true,
          cursor: "",
          onCreateTextNode: (node, str) => {
            setText((prev) => prev + str.nodeValue);
          },
          onRemoveNode: (node, str) => {
            setText((prev) => prev.substring(0, prev.length - 1));
          },
        }}
      /> */}
      <Stack
        direction={["column", "column", "column", "row"]}
        justify="center"
        align="center"
        mb="24px"
      >
        <Title>Hello, I'm Tanner!</Title>
        <h1>{text}</h1>
        <Title>{text}</Title>
      </Stack>
      <TitleBody>
        I'm a self-taught frontend developer based in Salt Lake City, Utah. My
        goal is to create engaging experiences for users, with a fine balance of
        technology and design.
      </TitleBody>
      <Stack
        direction={["column", "column", "row"]}
        spacing="4"
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
