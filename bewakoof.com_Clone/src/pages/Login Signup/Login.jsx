import React, { useRef, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { RouterContext } from "../../context/UserContext";

const Login = () => {
  let naviGate = useNavigate();
  const { setIsLogged } = useContext(RouterContext);

  let username = useRef(null);
  let userNumber = useRef(null);

  const HandleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let filterUser = users.find(
      (user) =>
        user.username === username.current.value &&
        user.userNumber === userNumber.current.value
    );

    if (!filterUser) {
      alert("wrong credentials");
    } else {
      setIsLogged({
        flag: true,
        user: filterUser.username,
      });

      localStorage.setItem("loggedUser", JSON.stringify(filterUser));
      naviGate("/");
    }
  };

  return (
    <Container maxW="100%" mt="12rem" textAlign="center">
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={30}>
        <Stack
          spacing={4}
          align="center"
          w={{ base: "100%", md: "100%" }}
          bgGradient="linear(to-t, #fff4c4, #fff)"
          py={8}
          borderRadius="lg"
        >
          <Heading>Welcome to the world of Bewakoof!</Heading>
          <Image
            src="https://images.bewakoof.com/web/group-19-1617704502.png"
            alt="Welcome"
            boxSize="100%"
          />
        </Stack>

        <form onSubmit={HandleLogin}>
          <Stack spacing={6} w={{ base: "100%", md: "100%" }} align="center">
            <Heading as="h2">Log in / Sign up</Heading>
            <Text fontSize="lg" color="gray.600">
              for Latest trends, exciting offers, and everything Bewakoof!
            </Text>

            <FormControl isRequired>
              <Input
                ref={username}
                placeholder="Enter Your Name"
                textAlign="center"
                fontSize="lg"
                py={6}
              />
            </FormControl>

            <FormControl isRequired>
              <Input
                ref={userNumber}
                type="tel"
                placeholder="Enter Mobile Number"
                textAlign="center"
                fontSize="lg"
                py={6}
              />
            </FormControl>

            <Button
              colorScheme="teal"
              size="lg"
              width="full"
              type="submit"
            >
              Login
            </Button>

            <Flex align="center" width="full">
              <Divider />
              <Text px={2}>OR</Text>
              <Divider />
            </Flex>

            <Box textAlign="center" mt={4}>
              <Text fontSize="md">
                create account
                <Link
                  to="/signup"
                  style={{ color: "#319795", margin: "10px" }}
                >
                  Sign up
                </Link>
              </Text>
            </Box>

            <Button variant="outline" width="full" fontSize="lg" py={6}>
              CONTINUE WITH EMAIL
            </Button>

            <Text fontSize="sm" color="gray.500">
              By creating an account or logging in, you agree with Bewakoof's
              Terms and Privacy Policy.
            </Text>
          </Stack>
        </form>
      </Flex>
    </Container>
  );
};

export default Login;
