import { Section } from "../../components";
import { ProfilePhoto } from "./ProfilePhoto";
import config from "../../config";
import { Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Section bg="blue.900" h="75vh" maxW="100%">
      <ProfilePhoto src={config.photo} />
      <Heading>{config.name}</Heading>
      <Text>{config.title}</Text>
    </Section>
  );
}

export { Home };
