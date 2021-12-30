import App from "./App";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./styles/ThemeProvider";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
