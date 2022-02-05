import { HStack, VStack } from "@chakra-ui/react";
import { SubHeader, Header, HeaderIcon } from "..";

export function SectionHeader({ icon, color, header, subHeader }) {
  return (
    <VStack spacing={5} align="center">
      <HeaderIcon icon={icon} color={color} />
      <VStack spacing={-2} ml="2rem" align="center">
        <SubHeader color={color}>{subHeader}</SubHeader>
        <Header>{header}</Header>
      </VStack>
    </VStack>
  );
}
