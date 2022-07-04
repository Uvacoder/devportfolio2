import {
  Box,
  HStack,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiBriefcase } from "react-icons/bi";
import { MountAnimation } from "../../components";

const Line = ({ ...props }) => (
  <Box bg="#21dfff" height="5rem" width="2px" rounded="full" {...props} />
);

const JobCard = ({ children, ...props }) => (
  <HStack
    bg="#1C1D1F"
    w="23rem"
    h="8rem"
    pos="absolute"
    top="0"
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
      <Text fontSize="xs" color="whiteAlpha.500" mb="-2">
        2021 - Present
      </Text>
      <Text fontWeight="bold" fontSize="2xl">
        Impact Suite
      </Text>
      <Text fontSize="sm">Software Developer</Text>
    </VStack>
  </HStack>
);

const MobileCard = ({ children, ...props }) => (
  <HStack
    bg="#1C1D1F"
    w="23rem"
    h="8rem"
    padding="1rem"
    rounded="lg"
    spacing="1rem"
    cursor="pointer"
    border="1px solid transparent"
    transition="all 0.2s ease-in-out"
    _hover={{
      // transform: "scale(1.01)",
      shadow: "xl",
      // opacity: 0.8,
      border: "1px solid #21dfff",
    }}
  >
    <Box h="5rem" w="5rem" bg="gray.600" rounded="full" />
    <VStack justify="start" align="start">
      <Text fontSize="xs" color="whiteAlpha.500" mb="-2">
        2021 - Present
      </Text>
      <Text fontWeight="bold" fontSize="2xl">
        Impact Suite
      </Text>
      <Text fontSize="sm">Software Developer</Text>
    </VStack>
  </HStack>
);

const DesktopSection = ({ children, ...props }) => (
  <HStack w="100%" maxW="7xl" justify="center" align="center" pos="relative">
    <VStack spacing={0}>
      <Box color="#21dfff" p="1rem" bg="#102b34" rounded="full" pos="relative">
        <BiBriefcase size={24} />
      </Box>
      {!props?.isLast && <Line />}
      <JobCard side={props.side} />
    </VStack>
  </HStack>
);

const MobileSection = ({ children, ...props }) => (
  <HStack w="100%" maxW="7xl" justify="center" align="center" pos="relative">
    <VStack spacing={0}>
      {props?.isFirst && (
        <Box
          color="#21dfff"
          p="1rem"
          bg="#102b34"
          rounded="full"
          pos="relative"
        >
          <BiBriefcase size={24} />
        </Box>
      )}
      <Line />
      <MobileCard />
    </VStack>
  </HStack>
);

export const JobSection = ({ ...props }) => {
  const component = useBreakpointValue({
    base: <MobileSection {...props} />,
    md: <DesktopSection {...props} />,
  });
  return <>{component}</>;
};
