import { chakra } from "@chakra-ui/react";

export function HeaderBody({ children }) {
  return (
    <chakra.p fontSize="header.body" color="text.light" maxW="3xl">
      {children}
    </chakra.p>
  );
}
