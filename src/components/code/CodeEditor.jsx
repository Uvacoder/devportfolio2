import { HStack, VStack, chakra, Code, Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Tag = ({ el, indent, close = false }) => (
  <HStack spacing="0" pl={`${indent}px`}>
    <Code color="gray.700" bg="none">
      {`<${close ? "/" : ""}`}
    </Code>
    <Code color="pink.400" bg="none">
      {el}
    </Code>
    <Code color="gray.700" bg="none">
      {">"}
    </Code>
  </HStack>
);

const HTMLTag = ({ el, indent, children }) => (
  <VStack spacing="0" textAlign={"left"} alignItems="start">
    <Tag el={el} indent={indent * 30} />
    {children}
    <Tag el={el} indent={indent * 30} close />
  </VStack>
);

const Content = ({ children, indent, ref }) => (
  <Code ref={ref} bg="none" pl={`${indent * 30}px`} color="white" maxW="lg">
    {children}
  </Code>
);

const LineNumbers = ({ length }) => {
  const lines = [];
  for (let i = 0; i < length; i++) {
    lines.push(i + 1);
  }
  return (
    <Code
      bg="none"
      color="gray.700"
      fontSize="14px"
      fontWeight="bold"
      pr="1rem"
      maxW="2.5rem"
    >
      {lines.join("\n")}
    </Code>
  );
};

export function CodeEditor({ text }) {
  return (
    <VStack
      bg="#0F1629"
      border="1px solid"
      borderColor="gray.700"
      rounded="lg"
      justify="start"
      align="start"
      w="auto"
      shadow="xl"
    >
      <HStack h="2rem" w="100%" borderBottom="1px solid" borderColor="gray.700">
        {/* status bar */}
        <Box w=".5rem" h=".7rem" bg="red.300" rounded="full" ml="1rem" />
        <Box w=".5rem" h=".7rem" bg="yellow.300" rounded="full" ml="1rem" />
        <Box w=".5rem" h=".7rem" bg="green.300" rounded="full" ml="1rem" />
      </HStack>
      <HStack p="1rem">
        <LineNumbers length={11} />
        <VStack spacing="0" pr="2rem">
          <HTMLTag el="html" indent={0}>
            <HTMLTag el="h1" indent={1}>
              <Content indent={2}>{text}</Content>
            </HTMLTag>
            <HTMLTag el="p" indent={1}>
              <Content indent={2}>
                I'm a self-taught frontend developer based in Salt Lake City,
                Utah. My goal is to create engaging experiences for users, with
                a fine balance of technology and design.
              </Content>
            </HTMLTag>
          </HTMLTag>
        </VStack>
      </HStack>
    </VStack>
  );
}
