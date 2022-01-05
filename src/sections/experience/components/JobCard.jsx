import React from "react";
import {
  HStack,
  Button,
  VStack,
  Text,
  chakra,
  Box,
  Fade,
} from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";

export function JobCard({ job }) {
  return (
    <VStack
      align="left"
      bg="#162032"
      shadow="lg"
      p="2rem"
      rounded="lg"
      pos="relative"
      w="full"
      maxW="2xl"
      spacing={0}
    >
      <Box
        h="3rem"
        w="3rem"
        mb="1rem"
        bg="blue.500"
        rounded="lg"
        bgImage="https://media-exp1.licdn.com/dms/image/C4D0BAQE0XkwMQKI9Cw/company-logo_200_200/0/1595453107511?e=2159024400&v=beta&t=F-XKB96X3D82FtizHoyS4QsjRQsu1kwAsvqw18n7i8M"
        bgSize="cover"
      />

      <Text fontSize={"26px"}>
        <chakra.strong pr=".5rem">{job.title}</chakra.strong>
        <chakra.strong color={`blue.500`}>@ {job.company}</chakra.strong>
      </Text>

      <Text fontSize={"14px"} color="whiteAlpha.600" pb=".5rem">
        {job.date}
      </Text>

      <Text color="whiteAlpha.800" fontSize={"14px"} display="flex" maxW="2xl">
        <chakra.span pt=".1rem" fontSize={"20px"} color={`blue.500`}>
          <IoMdArrowDropright />
        </chakra.span>
        {job.description}
      </Text>
    </VStack>
  );
}
