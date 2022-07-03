import { HStack, IconButton } from "@chakra-ui/react";
import { FadeUp } from "../../components/animations";
import { H1, Text } from "../../theme/components";

export const Title = ({ children }) => (
  <FadeUp delay={0.2}>
    <H1>{children}</H1>
  </FadeUp>
);

export const Subtitle = ({ children }) => (
  <FadeUp offsetY="40px" delay={0.4}>
    <Text>{children}</Text>
  </FadeUp>
);

export const ActionButtons = ({ children }) => (
  <FadeUp offsetY="40px" delay={0.6}>
    <HStack>{children}</HStack>
  </FadeUp>
);
