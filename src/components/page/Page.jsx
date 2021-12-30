import { VStack } from "@chakra-ui/react";

export function Page({ children }) {
  return (
    <VStack
      bg="bg.primary"
      justify="start"
      align="center"
      spacing="24"
      maxW="100vw"
      minH="100vh"
      as="main"
      w="100%"
    >
      {children}
    </VStack>
  );
}
