import { Box } from "@chakra-ui/react";
import About from "./Component/About.jsx";
import Header from "./Component/Header.jsx";
import Knowledge from "./Component/Knowledge.jsx";
import Fade from "react-reveal/Fade";
import Projects from "./Component/Projects.jsx";
import Contact from "./Component/Contact.jsx";
import Footer from "./Component/Footer.jsx";

const Home = () => {
  return (
    <Box w="100%" maxWidth="100vw" overflow="hidden">
      <Header />
      <Box mt="8rem">
        <Fade clear>
          <About />
          <Knowledge />
          <Projects />
          <Contact />
          <Footer />
        </Fade>
      </Box>
    </Box>
  );
};
export default Home;
