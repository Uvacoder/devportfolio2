import { H3, Text, Section } from "../..components";
import { Icon } from "./styles";
import { MountAnimation } from "../../components/animations";
import { Box } from "@chakra-ui/react";

const Experience = () => (
  <MountAnimation delay={0}>
    <Section id="experience" pt="10rem" w="100%">
      <Icon />
      <H3>Experience</H3>
      <Text maxW="2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda
        nesciunt sed null m dolor sit amet co.
      </Text>
      <Box h="20rem" />
    </Section>
  </MountAnimation>
);

export { Experience };
