import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const title = useColorModeValue("#810181", "purple.400");

  return (
    <>
      <Box
        display="flex"
        bg="white"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid #e4e4e4"
        mb="2rem"
        px={["2rem", "2.5rem", "6rem", "8rem"]}
        py={["1.5rem", "2rem"]}
        boxShadow="0px 0px 12px rgba(0,0,0,0.40)"
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
