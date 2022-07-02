import App from "./App";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import "@fontsource/poppins";
import "./theme/style.css";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
