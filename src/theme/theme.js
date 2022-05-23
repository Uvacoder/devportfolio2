import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundation";
import { styles } from "./global";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  styles,
});

export { theme };
