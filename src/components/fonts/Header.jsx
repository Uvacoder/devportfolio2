import { chakra } from "@chakra-ui/react";

export function Header({ children }) {
  return (
    <chakra.h2
      color="text.primary"
      fontSize="header.primary"
      fontWeight="black"
      letterSpacing="-.025em"
      pb=".5rem"
    >
      {children}
    </chakra.h2>
  );
}
