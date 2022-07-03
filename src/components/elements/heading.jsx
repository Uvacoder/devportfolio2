import { Text as ChakraText } from "@chakra-ui/react";

export const H1 = ({ children, ...props }) => (
  <ChakraText
    as={props.as || "h1"}
    fontSize={{ base: "38px", md: "72px" }}
    fontWeight={900}
    letterSpacing="-0.02em"
    lineHeight={1.2}
    maxW="3xl"
    textAlign="center"
    bgGradient="linear(to-l, #ca288c, #00ffee)"
    bgClip="text"
  >
    {children}
  </ChakraText>
);

export const H3 = ({ children, ...props }) => (
  <ChakraText
    as={props.as || "h3"}
    fontSize="28px"
    fontWeight="bold"
    textAlign="center"
    color="white"
  >
    {children}
  </ChakraText>
);
