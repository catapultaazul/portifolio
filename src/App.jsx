import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Home scrollBehavior="smooth" />
      </div>
    </ChakraProvider>
  );
};

export default App;
