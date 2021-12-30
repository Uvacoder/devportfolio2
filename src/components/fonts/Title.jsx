import { chakra } from "@chakra-ui/react";

export function Title({ children }) {
  return (
    <chakra.h1
      fontSize="title.primary"
      color="text.primary"
      fontWeight="black"
      letterSpacing="-1.5px"
      lineHeight="60px"
      textAlign="center"
      mb="24px"
    >
      {children}
    </chakra.h1>
  );
}
