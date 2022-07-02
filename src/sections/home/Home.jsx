import { Box, HStack, SlideFade } from "@chakra-ui/react";

import { Text, H1, Button } from "../../theme/components";
import { FadeUp } from "../../components/animations";
import { Section } from "../../components";
import { useIsMounted } from "../../hooks";

function Home() {
  const isMounted = useIsMounted();

  return (
    <Section minH="80vh" maxW="100%" id="home" pt="5rem">
      <FadeUp delay={0.2}>
        <H1>Boost your design productivity</H1>
      </FadeUp>
      <Box h="1.5rem" />
      <FadeUp in={isMounted} offsetY="40px" delay={0.4}>
        <Text>
          Design Maestro is a free extension for Keyboard Maestro app. It lets
          you automate tasks that you repeat hundreds of times each day.
        </Text>
      </FadeUp>
      <Box h="1.5rem" />
      <FadeUp in={isMounted} offsetY="40px" delay={0.6}>
        <HStack>
          <Button bg="blue.500">Resume</Button>
          <Button>Message</Button>
        </HStack>
      </FadeUp>
    </Section>
  );
}

export { Home };
