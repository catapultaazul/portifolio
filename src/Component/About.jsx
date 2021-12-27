import {
  Text,
  Heading,
  Box,
  Button,
  Icon,
  Link,
  Stack,
  Grid,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";

const About = () => {
  const { toggleColorMode } = useColorMode();

  const color = useColorModeValue("#810181", "purple.400");
  return (
    <Grid
      justifyContent="center"
      borderBottom="1px solid #e4e4e4"
      px={["2rem", "2.5rem", "6rem", "8rem"]}
      pb="3rem"
      gap={"2rem"}
      gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr) )"
    >
      <Stack>
        <Heading mb="2rem" color={color}>
          Sobre mim
        </Heading>
        <Box>
          <Text fontSize="1.125rem" mb="1rem" textAlign="justify">
            Olá, meu nome é Lucas Moreira e sou um desenvolvedor front-end.
          </Text>
          <Text fontSize="1.125rem" mb="1rem" textAlign="justify">
            Apaixonado por tecnologia desde sempre, curso o 1º período de
            Análise e Desenvolvimento de Sistemas na UNINASSAU.
          </Text>
          <Text fontSize="1.125rem" mb="1rem" textAlign="justify">
            Atualmente estou em transição de carreira e venho estudando sobre
            programação desde 2021 em plataformas como Digital Innovation One,
            Platzi, Udemy, Rocketseat e Alura.
          </Text>
          <Text fontSize="1.125rem" mb="1rem" textAlign="justify">
            Procurando uma pessoa desenvolvedora front-end? Vamos conversar!
          </Text>
        </Box>
      </Stack>
      <Stack justifyContent="center" align="center">
        <Link href="https://github.com/catapultaazul" isExternal>
          <Button
            colorScheme="purple"
            size="lg"
            fontSize={[".925rem", "1rem"]}
            w="100%"
          >
            <Icon as={FiGithub} mr="1rem" />
            Dê uma olhada no meu portifólio
          </Button>
        </Link>
      </Stack>
    </Grid>
  );
};
export default About;
