import { VStack } from "@chakra-ui/react";

function Section({ children, bg = "", h = "auto", maxW = "7xl" }) {
  return (
    <VStack
      as="section"
      justify="center"
      align="center"
      bg={bg}
      h={h}
      w="100%"
      maxW={maxW}
    >
      {children}
    </VStack>
  );
}

export { Section };
