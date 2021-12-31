import {
  Section,
  Header,
  HeaderBody,
  SubHeader,
  HeaderIcon,
} from "../components";
import { useState } from "react";
import {
  HStack,
  Button,
  VStack,
  Text,
  chakra,
  Box,
  Fade,
} from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const COLOR = "blue";
const JOBS = [
  {
    company: "Cisco",
    title: "Frontend Engineer",
    date: "May 2020 - Present",
    description:
      "I work on the Cisco Webex team. I am responsible for building the Webex Teams platform, and the Webex Teams SDK.",
  },
  {
    company: "Impact Suite",
    title: "Software Engineer",
    date: "January 2018 - May 2020",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur ut, perferendis inventore distinctio.",
  },
  {
    company: "Freelance",
    title: "Full Stack Developer",
    date: "May 2020 - Present",
    description:
      "I work on the Cisco Webex team. I am responsible for building the Webex Teams platform, and the Webex Teams SDK.",
  },
];

export function Experience() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Section id="Experience" align="left">
      <HeaderIcon icon={FaBriefcase} color={COLOR} />
      <SubHeader color={COLOR}>Work experience</SubHeader>
      <Header>Full stack developer</Header>
      <HeaderBody>
        I'm a developer and photographer. I've been working as a developer for
        over a year and a half, and I've been a photographer for about a year.
        I've been working on a few projects, but I'm always looking for new
        challenges.
      </HeaderBody>

      <HStack spacing={5} pt="1rem" pb="1rem">
        {JOBS.map((job, index) => (
          <Button
            color={index === currentTab ? "blue.400" : "whiteAlpha.500"}
            variant="link"
            _hover={{
              color: index === currentTab ? "blue.400" : "whiteAlpha.800",
            }}
            _focus={{ ring: false }}
            onClick={() => setCurrentTab(index)}
          >
            {job.company}
          </Button>
        ))}
      </HStack>

      {JOBS.map(
        (job, index) =>
          index === currentTab && (
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
                <chakra.strong color={`${COLOR}.500`}>
                  @ {job.company}
                </chakra.strong>
              </Text>

              <Text fontSize={"14px"} color="whiteAlpha.600" pb=".5rem">
                {job.date}
              </Text>

              <Text
                color="whiteAlpha.800"
                fontSize={"14px"}
                display="flex"
                maxW="2xl"
              >
                <chakra.span
                  pt=".1rem"
                  fontSize={"20px"}
                  color={`${COLOR}.500`}
                >
                  <IoMdArrowDropright />
                </chakra.span>
                {job.description}
              </Text>
            </VStack>
          )
      )}
    </Section>
  );
}
