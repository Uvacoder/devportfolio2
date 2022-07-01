import { extendTheme } from "@chakra-ui/react";
import { styles } from "./global";
import { colors } from "./colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  styles,
  fonts: {
    // body: "Poppins",
  },
});

export { theme };
