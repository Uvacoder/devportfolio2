import { Box } from "@chakra-ui/react";

export const SectionIcon = ({ color, bg, icon }) => (
  <Box color={color} p="1rem" bg={bg} rounded="2xl">
    {icon}
  </Box>
);
