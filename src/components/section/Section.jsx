import { VStack } from "@chakra-ui/react";

export function Section({ children, align = "left", id }) {
  return (
    <VStack id={id} as="section" align={align} w="full" maxW="5xl">
      {children}
    </VStack>
  );
}
