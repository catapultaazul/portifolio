import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Text,
  Stack,
  Flex,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const color = useColorModeValue("#810181", "purple.400");

  return (
    <Box borderBottom="1px solid #e4e4e4" py={["1.5rem", "2rem"]}>
      <Grid
        gap="1.5rem"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr) )"
      >
        <Flex direction="column" align="center" textAlign="center">
          <Heading mb={["1rem", "1rem", "1.5rem"]} color={color}>
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
        </Flex>
        <Flex direction="column" align="center" gap=".8rem">
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
        </Flex>
      </Grid>
    </Box>
  );
};

export default Contact;
