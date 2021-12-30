import { VStack } from "@chakra-ui/react";

export function Section({ children, align = "left" }) {
  return (
    <VStack as="section" align={align} w="full" maxW="5xl">
      {children}
    </VStack>
  );
}
