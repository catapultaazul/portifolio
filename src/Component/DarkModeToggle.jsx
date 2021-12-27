import { Button } from "@chakra-ui/button";
import { Icon, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode} colorScheme={"purple"}>
        {colorMode === "light" ? <Icon as={FiMoon} /> : <Icon as={FiSun} />}
      </Button>
    </>
  );
};
export default DarkModeToggle;
