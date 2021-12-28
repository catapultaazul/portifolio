import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const title = useColorModeValue("#810181", "purple.400");
  const header = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue(
    "0px 0px 12px rgba(0,0,0,0.40)",
    "0px 0px 12px #ffffff66"
  );

  return (
    <>
      <Box
        display="flex"
        bg={header}
        alignItems="center"
        justifyContent="space-between"
        mb="2rem"
        px={["2rem", "2.5rem", "6rem", "8rem"]}
        py={["1.5rem", "2rem"]}
        boxShadow={shadow}
        w="100vw"
        position="fixed"
        zIndex="1"
      >
        <HStack>
          <Text fontSize="3xl" fontWeight={"bold"}>
            Lucas
          </Text>
          <Text fontSize="3xl" color={title} fontWeight={"bold"}>
            Moreira
          </Text>
        </HStack>
        <DarkModeToggle />
      </Box>
    </>
  );
};
export default Header;
