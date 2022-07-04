import {
  Box,
  HStack,
  VStack,
  Text,
  SimpleGrid,
  Tag,
  Center,
} from "@chakra-ui/react";
import { HiLightningBolt } from "react-icons/hi";

const _card = {
  container: {
    w: "100%",
    h: "25rem",
    bg: "whiteAlpha.50",
    justify: "start",
    align: "left",
    p: "1rem",
    rounded: "xl",
  },
  image: {
    h: "15rem",
    w: "100%",
    bg: "whiteAlpha.50",
    rounded: "md",
  },
  tag: {
    fontSize: "sm",
    // fontWeight: "bold",
  },
  title: {
    fontSize: "2xl",
    fontWeight: "bold",
  },
  description: {
    fontSize: "sm",
    color: "whiteAlpha.600",
  },
};

export const Card = ({ children, tags = [], ...props }) => (
  <Center>
    <VStack {..._card.container}>
      <Box {..._card.image} />
      <Box h=".5rem" />
      <HStack>
        {tags.map((tag, index) => (
          <Tag key={index} bg={tag.color} {..._card.tag}>
            {tag.name}
          </Tag>
        ))}
      </HStack>
      <Box h=".5rem" />
      <Text {..._card.title}>Title</Text>
      <Text {..._card.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </VStack>
  </Center>
);

export const Grid = () => {
  const _tags = [
    {
      name: "React",
      color: "blue.600",
    },
    {
      name: "Node",
      color: "green.600",
    },
    {
      name: "TypeScript",
      color: "purple.500",
    },
  ];
  return (
    <SimpleGrid
      w={{ base: "100%" }}
      columns={{ base: 1, md: 3 }}
      spacing={5}
      px="1rem"
    >
      <Card tags={_tags} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  );
};
