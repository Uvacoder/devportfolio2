import { Text as ChakraText } from "@chakra-ui/react";

export const Text = ({ children, ...props }) => (
  <ChakraText
    color="primary.text"
    fontSize={{ base: "14px", md: "18px" }}
    maxW={{ base: "sm", md: "3xl" }}
    textAlign="center"
    lineHeight="2rem"
    {...props}
  >
    {children}
  </ChakraText>
);
