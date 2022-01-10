import {
  Section,
  Header,
  HeaderBody,
  SubHeader,
  HeaderIcon,
} from "../../components";
import { useState } from "react";
import { HStack, Button } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { jobs } from "./data/jobs";
import { JobCard } from "./components/JobCard";

export function Experience() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Section id="experience" align="left">
      <HeaderIcon icon={FaBriefcase} color={"blue"} />
      <SubHeader color={"blue"}>Work experience</SubHeader>
      <Header>Full stack developer</Header>
      <HeaderBody>
        I'm a developer and photographer. I've been working as a developer for
        over a year and a half, and I've been a photographer for about a year.
        I've been working on a few projects, but I'm always looking for new
        challenges.
      </HeaderBody>

      <HStack spacing={5} pt="2rem" pb="1rem">
        {jobs.map((job, index) => (
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

      {jobs.map((job, index) => index === currentTab && <JobCard job={job} />)}
    </Section>
  );
}
