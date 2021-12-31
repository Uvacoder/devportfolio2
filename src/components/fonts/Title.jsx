import { Heading } from "@chakra-ui/react";

export function Title({ children, color = "text.primary" }) {
  return (
    <Heading
      as="h1"
      fontSize={{ base: "48px", md: "title.primary" }}
      color={`${color}`}
      fontWeight="black"
      letterSpacing="-1.5px"
      lineHeight="60px"
      textAlign="center"
      display="flex"
    >
      {children}
    </Heading>
  );
}
