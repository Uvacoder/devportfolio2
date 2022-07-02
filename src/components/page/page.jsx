import React from "react";
import { VStack } from "@chakra-ui/react";

function Page({ children }) {
  return (
    <VStack justify="start" align="center" overflowY="hidden">
      <VStack w="100%">{children}</VStack>
    </VStack>
  );
}

export { Page };
