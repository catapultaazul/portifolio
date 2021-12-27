import React from "react";
import {
  Text,
  Box,
  Heading,
  Stack,
  Grid,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiChakraui,
} from "react-icons/si";

const Knowledge = () => {
  const techs = [
    { name: "ReactJs", icon: FaReact },
    { name: "HTML5", icon: FaHtml5 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Typescript", icon: SiTypescript },
    { name: "Git e GitHub", icon: SiGithub },
    { name: "CSS", icon: SiCss3 },
    { name: "Boostrap", icon: SiBootstrap },
    { name: "Sass", icon: SiSass },
    { name: "Chakra-UI", icon: SiChakraui },
  ];

  const { toggleColorMode } = useColorMode();

  const color = useColorModeValue("#810181", "purple.400");

  return (
    <Box
      px={["2rem", "2.5rem", "6rem", "8rem"]}
      borderBottom="1px solid #e4e4e4"
      py={["1.5rem", "2rem"]}
    >
      <Stack justifyContent="center" display="flex">
        <Heading textAlign="center" color={color}>
          Conhecimentos
        </Heading>
        <Text textAlign="center" fontSize="1.125rem">
          Estudando programação desde 2021, estou inteiramente dedicado a esta
          área e aprendendo novos métodos de desenvolvimento todos os dias.
          Estes são alguns dos meus conhecimentos já adquiridos.
        </Text>
      </Stack>
      <Grid
        mt="2rem"
        gap="1.5rem"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr) )"
      >
        {techs.map((tech) => {
          const icon = tech.icon;
          return (
            <Box
              boxShadow="0px 0px 12px rgba(0,0,0,0.15)"
              textAlign="center"
              p="2.625rem 1rem"
              borderBottom=".25rem solid purple"
            >
              <Icon as={icon} fontSize="5rem" mb="1.5rem" color={color} />
              <Text fontSize="1.5rem">{tech.name}</Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Knowledge;
