import { VStack } from "@chakra-ui/react";

function Section({ children, bg = "", h = "auto", maxW = "8xl", ...props }) {
  return (
    <VStack
      as="section"
      justify="center"
      align="center"
      bg={bg}
      h={h}
      w="100%"
      maxW={maxW}
      {...props}
    >
      {children}
    </VStack>
  );
}

export { Section };
