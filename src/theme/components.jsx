import { Text as ChakraText, Button as ChakraButton } from "@chakra-ui/react";

export const Text = ({ children }) => (
  <ChakraText
    color="primary.text"
    fontSize="18px"
    maxW="3xl"
    textAlign="center"
    lineHeight="2rem"
  >
    {children}
  </ChakraText>
);

export const H1 = ({ children, ...props }) => (
  <ChakraText
    as={props.as || "h1"}
    fontSize="74px"
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

export const Button = ({ children, ...props }) => (
  <ChakraButton
    rounded="full"
    p=" 1rem "
    bg={props.bg || "#1f2223"}
    {...props}
    _hover={{ opacity: 0.8, transform: "translateY(-2px)" }}
  >
    {children}
  </ChakraButton>
);
