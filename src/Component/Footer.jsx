import React from "react";
import {
  Box,
  HStack,
  Stack,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
} from "@chakra-ui/react";
import { FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <Box
      px={["2rem", "2.5rem", "6rem", "8rem"]}
      py={["1.5rem", "2rem"]}
      bg="purple"
    >
      <HStack justify="space-between">
        <Stack gap="1rem">
          <HStack>
            <Text
              fontSize={["xl", "2xl", "3xl"]}
              fontWeight={"bold"}
              color="black"
            >
              Lucas
            </Text>
            <Text
              fontSize={["xl", "2xl", "3xl"]}
              color={"white"}
              fontWeight={"bold"}
            >
              Moreira
            </Text>
          </HStack>
          <Text color="white" fontSize={["l", "xl", "2xl"]}>
            Desenvolvido por Lucas Moreira.
          </Text>
        </Stack>
        <HStack>
          <LinkBox
            transition=".3s"
            _hover={{
              transform: "translateY(-.5rem)",
            }}
          >
            <LinkOverlay href="https://github.com/catapultaazul">
              <Icon
                as={FiGithub}
                color="white"
                fontSize={["1rem", "1.5rem", "2rem"]}
                mr={["1rem", "1.5rem", "2rem"]}
              />
            </LinkOverlay>
          </LinkBox>
          <LinkBox
            transition=".3s"
            _hover={{
              transform: "translateY(-.5rem)",
            }}
          >
            <LinkOverlay href="mailto:lucasguilherme.31@outlook.com">
              <Icon
                as={FiMail}
                color="white"
                fontSize={["1rem", "1.5rem", "2rem"]}
              />
            </LinkOverlay>
          </LinkBox>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
