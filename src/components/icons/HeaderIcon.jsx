import { Center } from "@chakra-ui/react";

export function HeaderIcon({ icon: Icon, color }) {
  return (
    <Center
      ringColor={`${color}.200`}
      bg={`${color}.400`}
      color={`${color}.900`}
      rounded="full"
      fontSize="2xl"
      ring="4px"
      w="4rem"
      h="4rem"
      mb="4"
    >
      <Icon />
    </Center>
  );
}
