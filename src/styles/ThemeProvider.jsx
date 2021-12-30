import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    text: {
      primary: "#fff",
      light: "#94a3b8",
    },
    bg: {
      primary: "#0B1120",
    },
  },
  fontSizes: {
    title: {
      primary: "60px",
      body: "18px",
    },
    header: {
      primary: "36px",
      body: "16px",
    },
  },
});

export function ThemeProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
