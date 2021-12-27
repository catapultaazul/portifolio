import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Text,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const { toggleColorMode } = useColorMode();

  const color = useColorModeValue("#810181", "purple.400");

  return (
    <HStack
      px={["2rem", "2.5rem", "6rem", "8rem"]}
      borderBottom="1px solid #e4e4e4"
      py={["2.5rem", "4rem"]}
      justify="space-between"
    >
      <Box>
        <Heading mb="1.5rem" color={color}>
          Entre em contato comigo!
        </Heading>
        <Button
          colorScheme="purple"
          size="lg"
          fontSize={[".925rem", "1rem"]}
          w="15rem"
        >
          <Icon as={FaWhatsapp} mr="1rem" />
          <Text>Entrar em contato</Text>
        </Button>
      </Box>
      <Stack>
        <HStack alignItems="center">
          <Icon as={FaPhoneAlt} color={color} />
          <Text>81 99522-8060</Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={FaMapMarkerAlt} color={color} />
          <Text>Recife, PE</Text>
        </HStack>
        <HStack alignItems="center">
          <Icon as={HiMail} color={color} />
          <Text>lucasguilherme.31@outlook.com</Text>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default Contact;
