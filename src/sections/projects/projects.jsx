import { H3, Text, Section } from "../../components";
import { Grid } from "./styles";
import { MountAnimation } from "../../components/animations";
import { Box, Center, VStack } from "@chakra-ui/react";
import { SectionIcon } from "../shared/section-icon";
import { HiLightningBolt } from "react-icons/hi";
import { useIsMounted } from "../../hooks";

export const Projects = () => {
  return (
    <MountAnimation delay={0}>
      <Section id="projects" pt="10rem" w="100%" spacing={0}>
        <SectionIcon
          color="#76c57f"
          bg="#202E23"
          icon={<HiLightningBolt size={32} />}
        />
        <Box h="1rem" />
        <H3>Projects</H3>
        <Box h="1rem" />

        <Text maxW="2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          assumenda nesciunt sed null m dolor sit amet co.
        </Text>
        <Box h="4rem" />

        <Grid />
      </Section>
    </MountAnimation>
  );
};
