import React, { useState, useRef, useContext } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RouterContext } from "../../context/UserContext";

const SignUp = () => {
  let URL =
    "https://food-order-2e6a8-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";
  let navigate = useNavigate();

  const { isLogged, setIsLogged } = useContext(RouterContext);
  let username = useRef(null);
  let userEmail = useRef(null);
  let userNumber = useRef(null);
  const HandleSigUp = (e) => {
    e.preventDefault();
    let obj = {
      username: username.current.value,
      userNumber: userNumber.current.value,
      userEmail: userNumber.current.value,
    };
    axios.post(URL, obj).then((res) => {
      alert("User account created successfully");
      navigate("/login");
    });
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
            <FormControl id="name" isRequired>
              <Input
                ref={userEmail}
                type="email"
                placeholder="Enter Your Email"
                textAlign="center"
                fontSize="lg"
                py={6}
              />
            </FormControl>
            <FormControl id="name" isRequired>
              <Input
                ref={username}
                type="text"
                placeholder="Enter Your Name"
                textAlign="center"
                fontSize="lg"
                py={6}
              />
            </FormControl>

            <FormControl id="number" isRequired>
              <Input
                ref={userNumber}
                placeholder="Enter Mobile Number"
                textAlign="center"
                fontSize="lg"
                py={6}
              />
            </FormControl>
              <Button
                
                loadingText="Processing"
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

            {/* Log In Button */}
            <Box textAlign="center" mt={4}>
              <Text fontSize="md">
                You have already account
                <Link to="/login" style={{ color: "#319795", margin: "10px" }}>
                  Login
                </Link>
              </Text>
            </Box>

            <Button
              variant="outline"
              width="full"
              fontSize="lg"
              py={6}
              leftIcon={
                <Image
                  src="https://images.bewakoof.com/web/carbon-email-1620039620.png"
                  boxSize={6}
                />
              }
            >
              CONTINUE WITH EMAIL
            </Button>

            <Flex gap={4}>
              <Link href="YOUR_GOOGLE_AUTH_URL" width="full">
                <Button
                  width="full"
                  variant="outline"
                  leftIcon={
                    <Image
                      src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                      boxSize={6}
                    />
                  }
                >
                  GOOGLE
                </Button>
              </Link>
              <Link href="YOUR_FACEBOOK_AUTH_URL" width="full">
                <Button
                  width="full"
                  variant="outline"
                  leftIcon={
                    <Image
                      src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                      boxSize={6}
                    />
                  }
                >
                  FACEBOOK
                </Button>
              </Link>
            </Flex>

            <Text fontSize="sm" color="gray.500">
              By creating an account or logging in, you agree with Bewakoof's{" "}
              <Link
                color="teal.500"
                href="https://www.bewakoof.com/terms-and-conditions"
                isExternal
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                color="teal.500"
                href="https://www.bewakoof.com/privacy-policy-and-disclaimer"
                isExternal
              >
                Privacy Policy
              </Link>
              .
            </Text>
          </Stack>
        </form>
      </Flex>
    </Container>
  );
};

export default SignUp;
