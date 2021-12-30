import { HStack, VStack, chakra, Code, Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export const Tag = ({ el, indent, close = false }) => (
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

export const HTMLText = ({ children, indent, ref }) => (
  <Code ref={ref} bg="none" pl={`${indent * 30}px`} color="white" maxW="lg">
    {children}
  </Code>
);

export const LineNumbers = ({ length }) => {
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
