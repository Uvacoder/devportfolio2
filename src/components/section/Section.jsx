import { VStack } from "@chakra-ui/react";

export function Section({ children, align = "left", id }) {
  return (
    <VStack id={id} as="section" w="4xl" align={align} spacing={0}>
      {children}
    </VStack>
  );
}
