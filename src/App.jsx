import Home from "./Home";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

const App = () => {
  return (
    <>
      <div className="App">
        <Home scrollBehavior="smooth" />
      </div>
    </>
  );
};

export default App;
