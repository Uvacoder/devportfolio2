import { Heading } from "@chakra-ui/react";

export function Title({ children }) {
  return (
    <Heading
      as="h1"
      fontSize={{ base: "48px", md: "title.primary" }}
      color="text.primary"
      fontWeight="black"
      letterSpacing="-1.5px"
      lineHeight="60px"
      textAlign="center"
      mb="24px"
    >
      {children}
    </Heading>
  );
}
