import React, { useRef } from "react";
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

const SignUp = () => {
  let navigate = useNavigate();

  let username = useRef(null);
  let userEmail = useRef(null);
  let userNumber = useRef(null);

  const HandleSigUp = (e) => {
    e.preventDefault();

    let obj = {
      username: username.current.value,
      userEmail: userEmail.current.value,
      userNumber: userNumber.current.value,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let isExist = users.find(
      (user) => user.userNumber === obj.userNumber
    );

    if (isExist) {
      alert("User already exists");
      return;
    }

    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User account created successfully");
    navigate("/login");
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

        <form onSubmit={HandleSigUp}>
          <Stack spacing={6} w={{ base: "100%", md: "100%" }} align="center">
            <Heading as="h2">Log in / Sign up</Heading>
            <Text fontSize="lg" color="gray.600">
              for Latest trends, exciting offers, and everything Bewakoof!
            </Text>

            <FormControl isRequired>
              <Input
                ref={userEmail}
                type="email"
                placeholder="Enter Your Email"
                textAlign="center"
                fontSize="lg"
                py={6}
              />
            </FormControl>

            <FormControl isRequired>
              <Input
                ref={username}
                type="text"
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
              Sign Up
            </Button>

            <Flex align="center" width="full">
              <Divider />
              <Text px={2}>OR</Text>
              <Divider />
            </Flex>

            <Box textAlign="center" mt={4}>
              <Text fontSize="md">
                You have already account
                <Link to="/login" style={{ color: "#319795", margin: "10px" }}>
                  Login
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

export default SignUp;
