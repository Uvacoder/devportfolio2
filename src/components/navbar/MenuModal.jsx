import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Link,
  VStack,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { FaTwitter, FaGithub, FaLinkedin, FaGit } from "react-icons/fa";

export function MenuModal({ isOpen, onClose }) {
  return (
    <Modal
      isCentered={false}
      isOpen={isOpen}
      onClose={onClose}
      size="xs"
      motionPreset="slideInBottom"
    >
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent pos="absolute" top={5} right={5} m="0" bg="#1c2638">
        <ModalCloseButton mt="1.5rem" />
        <ModalBody>
          <VStack
            mt="2rem"
            align="left"
            color="text.light"
            fontWeight="bold"
            spacing="2rem"
          >
            <Link>Skills</Link>
            <Link>Experience</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <VStack w="full" align="left">
            <Button bg="blue.400">
              <FaLinkedin style={{ marginRight: ".5rem" }} />
              LinkedIn
            </Button>

            <Button bg="purple.600" onClick={onClose} w="full">
              <FaGithub style={{ marginRight: ".5rem" }} />
              Github
            </Button>

            <Button bg="blue.500">
              <FaTwitter style={{ marginRight: ".5rem" }} />
              Twitter
            </Button>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
