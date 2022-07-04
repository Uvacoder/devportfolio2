import { H3, Text, Section } from "../../components";
import { JobSection } from "./styles";
import { MountAnimation } from "../../components/animations";
import { Box } from "@chakra-ui/react";
import { SectionIcon } from "../shared/section-icon";
import { BiBriefcase } from "react-icons/bi";

const Experience = () => {
  return (
    <MountAnimation delay={0}>
      <Section id="experience" pt="10rem" w="100%" spacing={0}>
        <SectionIcon
          color="#21dfff"
          bg="#102b34"
          icon={<BiBriefcase size={32} />}
        />
        <Box h="1rem" />

        <H3>Experience</H3>
        <Box h="1rem" />

        <Text maxW="2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          assumenda nesciunt sed null m dolor sit amet co.
        </Text>
        <Box h="4rem" />

        <JobSection side="left" isFirst />
        <JobSection side="right" isLast />
      </Section>
    </MountAnimation>
  );
};

export { Experience };
