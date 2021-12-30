import { chakra } from "@chakra-ui/react";

export function Header({ children }) {
  return (
    <chakra.h2
      color="text.primary"
      fontSize="header.primary"
      fontWeight="black"
      letterSpacing="-.025em"
      mb="4"
    >
      {children}
    </chakra.h2>
  );
}
