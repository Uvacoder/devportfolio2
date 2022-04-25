import { Image } from "@chakra-ui/react";

function ProfilePhoto({ src }) {
  return (
    <Image
      src={src}
      alt="Profile Photo"
      h="10rem"
      w="10rem"
      borderRadius="50%"
    />
  );
}

export { ProfilePhoto };
