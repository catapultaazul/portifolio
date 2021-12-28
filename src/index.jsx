import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
