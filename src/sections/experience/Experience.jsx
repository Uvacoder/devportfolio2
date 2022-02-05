import {
  Section,
  Header,
  HeaderBody,
  SubHeader,
  HeaderIcon,
  SectionHeader,
} from "../../components";
import { useState } from "react";
import { HStack, Button } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import { jobs } from "./data/jobs";
import { JobCard } from "./components/JobCard";
import { motion } from "framer-motion";

export function Experience() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Section id="experience" align="center">
      <SectionHeader
        icon={FaBriefcase}
        color="blue"
        subHeader="Work experience"
        header="Full stack developer"
      />

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

      {jobs.map(
        (job, index) =>
          index === currentTab && (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              // transition={{
              //   duration: 0.2,
              //   stiffness: 500,
              //   type: "spring",
              //   bounce: 1,
              // }}
            >
              <JobCard job={job} />
            </motion.div>
          )
      )}
    </Section>
  );
}
