import { Box } from "@chakra-ui/react";
import { Button } from "../../theme/components";
import { Section } from "../../components";
import { Title, Subtitle, ActionButtons } from "./styles";

function Home() {
  return (
    <Section minH="80vh" maxW="100%" id="home" pt="5rem">
      <Title>Boost your design productivity</Title>

      <Box h="1.5rem" />

      <Subtitle>
        Design Maestro is a free extension for Keyboard Maestro app. It lets you
        automate tasks that you repeat hundreds of times each day.
      </Subtitle>

      <Box h="1.5rem" />

      <ActionButtons>
        <Button bg="blue.500">Resume</Button>
        <Button>Message</Button>
      </ActionButtons>
    </Section>
  );
}

export { Home };
