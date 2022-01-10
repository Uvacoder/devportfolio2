import React from "react";
import { Wrap, chakra, Text } from "@chakra-ui/react";

const Icon = ({ icon: Icon, label, color }) => (
  <chakra.div
    _hover={{ color: color }}
    justifyContent="center"
    alignItems="center"
    color={color}
    flexDir="column"
    display="flex"
    rounded="lg"
    bg="#162032"
    w="7rem"
    h="7rem"
  >
    <Icon key={label} />
    <Text pt="1rem" fontSize="sm">
      {label}
    </Text>
  </chakra.div>
);

export function Icons({ icons }) {
  return (
    <Wrap
      justify="space-between"
      fontSize="32px"
      spacing="1rem"
      display="flex"
      pt="1rem"
      w="100%"
    >
      {icons.map((i) => (
        <Icon label={i.label} color={i.color} icon={i.icon} />
      ))}
    </Wrap>
  );
}
