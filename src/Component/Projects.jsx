import React from "react";
import {
  Text,
  Box,
  Heading,
  Stack,
  Grid,
  Image,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";

const Projects = () => {
  const color = useColorModeValue("#810181", "purple.400");

  const apps = [
    {
      name: "letmeask",
      imgURL:
        "https://raw.githubusercontent.com/guilhermecapitao/letmeask/c068f01c136ad259023a7f7a2642a5781791b607/.github/cover.svg",
      description:
        "Desenvolvido durante o bootcamp 'Nlw Together' da Rocketseat, esta aplicação foi criada usando ReactJs, Typescript, Sass e Firebase",
      url: "https://github.com/catapultaazul/letmeask",
    },
    {
      name: "dt money",
      imgURL:
        "https://raw.githubusercontent.com/catapultaazul/dt-money/master/src/assets/site.png",
      description:
        "Desenvolvido durante o Ignite da Rocketseat, essa aplicação foi criada utilizando ReactJs, Typescript e Styled Components",
      url: "https://github.com/catapultaazul/dt-money",
    },
    {
      name: "Smart Bank",
      url: "https://github.com/catapultaazul/smart-bank",
      imgURL:
        "https://raw.githubusercontent.com/catapultaazul/smart-bank/master/site.png",
      description:
        "Desenvolvida durante a Formação ReactJs da Alura, esta aplicação foi criada focada em Styled Components e a implementação de Modo Escuro.",
    },
    {
      name: "React Form",
      imgURL:
        "https://raw.githubusercontent.com/catapultaazul/react-form/master/site.png",
      url: "https://github.com/catapultaazul/react-form",
      description:
        "React Form é uma aplicação criada na Formação ReactJS da Alura e focada na componentização do React e na validação de dados, além de ter sido estilizada com Material UI.",
    },
    {
      name: "Finans",
      imgURL:
        "https://raw.githubusercontent.com/catapultaazul/finans-bootstrap/master/finans.gif",
      url: "https://github.com/catapultaazul/finans-bootstrap",
      description:
        "Site desenvolvido com o auxílio do Bootstrap no curso 'Bootstrap & Design Responsivo' da Udemy.",
    },
  ];
  return (
    <Box
      px={["2rem", "2.5rem", "6rem", "8rem"]}
      borderBottom="1px solid #e4e4e4"
      py={["1.5rem", "2rem"]}
    >
      <Stack justifyContent="center" display="flex">
        <Heading textAlign="center" color={color}>
          Projetos
        </Heading>
        <Text textAlign="center" fontSize="1.5rem">
          Esses são alguns dos projetos que mais me orgulho de ter realizado.
        </Text>
      </Stack>
      <Grid
        mt="2rem"
        gap="1.5rem"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr) )"
      >
        {apps.map((app) => {
          return (
            <LinkBox
              transition=".3s"
              _hover={{
                transform: "translateY(-.5rem)",
              }}
            >
              <LinkOverlay href={app.url}>
                <Stack
                  boxShadow="0px 0px 12px rgba(0,0,0,0.15)"
                  textAlign="center"
                  p="1.5rem 1rem"
                  borderBottom=".25rem solid purple"
                  h="600px"
                >
                  <Heading color={color}>{app.name}</Heading>
                  <Image
                    mt="1rem"
                    src={app.imgURL}
                    h="200px"
                    objectFit="fill"
                  />
                  <Text mt="1rem" fontSize={["1.2rem", "1.5rem"]}>
                    {app.description}
                  </Text>
                </Stack>
              </LinkOverlay>
            </LinkBox>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
