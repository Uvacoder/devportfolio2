import { chakra } from "@chakra-ui/react";

export function TitleBody({ children }) {
  return (
    <chakra.p
      fontSize={{ base: "16px", md: "title.body" }}
      color="text.light"
      maxW="3xl"
      textAlign="center"
      pb="24px"
    >
      {children}
    </chakra.p>
  );
}
