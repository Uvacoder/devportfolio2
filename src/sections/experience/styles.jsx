import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { BiBriefcase } from "react-icons/bi";
import { MountAnimation } from "../../components";

export const Icon = () => (
  <Box color="#21dfff" p="1rem" bg="#102b34" rounded="2xl">
    <BiBriefcase size={32} />
  </Box>
);

const Line = ({ ...props }) => (
  <Box bg="#21dfff" height="5rem" width="2px" rounded="full" {...props} />
);

const JobCard = ({ children, ...props }) => (
  <HStack
    bg="#1C1D1F"
    w="23rem"
    pos="absolute"
    left={props.side === "left" ? "-5.5rem" : "unset"}
    right={props.side === "right" ? "-5rem" : "unset"}
    padding="1rem"
    rounded="lg"
    spacing="1rem"
    cursor="pointer"
    transition="all 0.2s ease-in-out"
    _hover={{ transform: "scale(1.02)", shadow: "xl", opacity: 0.8 }}
  >
    <Box h="5rem" w="5rem" bg="gray.600" rounded="full" />
    <VStack justify="start" align="start">
      <Text fontSize="xs" color="whiteAlpha.500">
        2021 - Present
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        Impact Suite
      </Text>
      <Text fontSize="sm">Software Developer</Text>
    </VStack>
  </HStack>
);

export const JobSection = ({ side }) => {
  return (
    <HStack w="100%" maxW="7xl" justify="center" align="center" pos="relative">
      <VStack>
        <Box
          color="#21dfff"
          p="1rem"
          bg="#102b34"
          rounded="full"
          pos="relative"
        >
          <BiBriefcase size={24} />
        </Box>
        <Line />
      </VStack>

      <JobCard side={side} />
    </HStack>
  );
};
