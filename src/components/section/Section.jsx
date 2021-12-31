import { VStack } from "@chakra-ui/react";

export function Section({ children, align = "left", id }) {
  return (
    <VStack
      id={id}
      as="section"
      w="full"
      maxW="4xl"
      pb="6rem"
      align={align}
      spacing={0}
    >
      {children}
    </VStack>
  );
}
