import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import useHistory
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Input,
  FormControl,
  FormLabel,
  Divider,
} from "@chakra-ui/react";
import { removeFromCart } from "../../redux/action/action";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "creditCard", // Default payment method
  });

  const totalMRP = cartItems.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log("Checkout Details: ", userDetails);
    alert("Thank you for your purchase!");

    // Optionally, remove items from the cart after checkout
    cartItems.forEach((item) => {
      dispatch(removeFromCart(item.id));
    });
  };

  return (
    <Box p={[4, 8]} maxW="100%" mx="auto" mt={[20, 28]}>
      {cartItems.length === 0 ? (
        <>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="gray.700"
            textAlign="center"
          >
            Your cart is empty. Please add items to checkout.
          </Text>
          <Link to="/">
            <Button
              colorScheme="teal"
              mt={4}
              // Add onClick handler
            >
              Back to Shopping
            </Button>
          </Link>
        </>
      ) : (
        <>
          {/* User Details Form */}
          <VStack spacing={6} align="stretch">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Checkout
            </Text>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </FormControl>

            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </FormControl>

            <HStack spacing={4}>
              <FormControl id="city" isRequired>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  name="city"
                  value={userDetails.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
              </FormControl>

              <FormControl id="state" isRequired>
                <FormLabel>State</FormLabel>
                <Input
                  type="text"
                  name="state"
                  value={userDetails.state}
                  onChange={handleChange}
                  placeholder="Enter your state"
                />
              </FormControl>
            </HStack>

            <FormControl id="postalCode" isRequired>
              <FormLabel>Postal Code</FormLabel>
              <Input
                type="text"
                name="postalCode"
                value={userDetails.postalCode}
                onChange={handleChange}
                placeholder="Enter your postal code"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Payment Method</FormLabel>
              <HStack spacing={4}>
                <Button
                  variant={
                    userDetails.paymentMethod === "creditCard"
                      ? "solid"
                      : "outline"
                  }
                  onClick={() =>
                    setUserDetails({
                      ...userDetails,
                      paymentMethod: "creditCard",
                    })
                  }
                >
                  Credit Card
                </Button>
                <Button
                  variant={
                    userDetails.paymentMethod === "paypal" ? "solid" : "outline"
                  }
                  onClick={() =>
                    setUserDetails({ ...userDetails, paymentMethod: "paypal" })
                  }
                >
                  PayPal
                </Button>
              </HStack>
            </FormControl>
          </VStack>

          {/* Cart Summary */}
          <Box border="1px solid #e2e8f0" p={4} mt={8} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={4}>
              Order Summary
            </Text>
            <Divider />
            <VStack spacing={2} align="stretch" mt={4}>
              {cartItems.map((item) => (
                <HStack justify="space-between" key={item.id}>
                  <Text>
                    {item.Title} (x{item.qty})
                  </Text>
                  <Text fontWeight="bold">₹{item.price * item.qty}</Text>
                </HStack>
              ))}
            </VStack>
            <Divider />
            <HStack
              justify="space-between"
              py={2}
              fontSize="md"
              fontWeight="bold"
            >
              <Text>Total MRP (Incl. of taxes)</Text>
              <Text>₹{totalMRP}</Text>
            </HStack>
            <Button colorScheme="teal" w="100%" mt={4} onClick={handleCheckout}>
              Place Order
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CheckoutPage;
