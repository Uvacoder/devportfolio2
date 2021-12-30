import { chakra } from "@chakra-ui/react";

export function SubHeader({ children, color }) {
  return (
    <chakra.p
      fontSize="header.body"
      color={`${color}.400`}
      fontWeight="semibold"
    >
      {children}
    </chakra.p>
  );
}
