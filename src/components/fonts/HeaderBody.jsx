import { chakra } from "@chakra-ui/react";

export function HeaderBody({ children }) {
  return (
    <chakra.p
      fontSize="header.body"
      color="text.light"
      maxW="2xl"
      textAlign="left"
    >
      {children}
    </chakra.p>
  );
}
