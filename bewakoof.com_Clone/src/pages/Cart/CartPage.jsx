import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Flex,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { removeFromCart, updateCartItemQty } from "../../redux/action/action";
import { MdDeleteForever } from "react-icons/md";
const CartPage = () => {
  const [mainAmount, setMainAmount] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQtyChange = (id, qty) => {
    if (qty > 0) {
      dispatch(updateCartItemQty(id, qty));
    }
  };

  const totalMRP = cartItems.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  console.log("Cart Items:", cartItems);
  const truncateTitle = (title) => {
    const words = title.split(" "); // Split title into words
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "..."; // Return first three words with ellipsis
    }
    return title; // Return the original title if it's three words or fewer
  };
  return (
    <Box p={[2, 6]} maxW="100%" mx="auto" mt={[20, 28]}>
      {cartItems.length === 0 ? (
        <Flex
          p={[2, 4]}
          maxW="80%"
          mx="auto"
          mt={10}
          align="center"
          justify="center"
          flexDir={["column", "row"]}
        >
          <Box
            p={[2, 4]}
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDir={["column", "row"]}
            alignItems="center"
            justifyContent="space-between"
            w="80%"
            maxW="300px"
            border="1px solid #e2e8f0"
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
              transition: "all 0.3s",
            }}
          >
            {/* UFO Image on the Left */}
            <Image
              src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif"
              alt="UFO GIF"
              boxSize={["100px", "120px"]}
              mr={[0, 6]}
              mb={[4, 0]}
              borderRadius="full"
              transition="transform 0.3s"
              _hover={{ transform: "rotate(-10deg) scale(1.1)" }}
            />

            {/* Message on the Right */}
            <VStack align="center" spacing={4} flex="1">
              <Text fontSize={["xl", "2xl"]} fontWeight="bold" color="gray.700">
                Nothing In The Bag
              </Text>
              <Divider borderColor="gray.400" />
              <Link to="/">
                <Button
                  colorScheme="teal"
                  variant="outline"
                  size="lg"
                  borderRadius="full"
                  _hover={{
                    bg: "teal.500",
                    color: "white",
                    borderColor: "teal.500",
                  }}
                >
                  Go to Home
                </Button>
              </Link>
            </VStack>
          </Box>
        </Flex>
      ) : (
        <>
          {/* Cart Items */}
          <VStack spacing={[4, 8]} align="stretch" mt={4}>
            {cartItems.map((item) => (
              <HStack
                key={item.id}
                justify="space-between"
                align="center"
                p={4}
                boxShadow="lg"
                borderRadius="md"
                border="1px solid #e2e8f0"
                flexDirection={["column", "row"]}
              >
                <Image src={item.Display_image} boxSize={["70px", "100px"]} />
                <VStack
                  align="start"
                  spacing={1}
                  textAlign={["center", "left"]}
                >
                  <Text fontSize={["12", "20"]} fontWeight="bold">
                    {truncateTitle(item.Title)}{" "}
                    {/* Use the truncate function */}
                  </Text>
                  <HStack justifyContent={["center", "flex-start"]}>
                    <Text color="gray.500" as="s">
                      ₹{item.strikedOffprice}
                    </Text>
                    <Text color="teal.500" fontWeight="bold">
                      ₹{item.price}
                    </Text>
                  </HStack>
                  <Badge colorScheme="teal">INCLUSIVE OF ALL TAXES</Badge>
                </VStack>

                {/* Quantity and Remove Button */}
                <Flex align="center" justifyContent={["center", "flex-start"]}>
                  <Button
                    size="sm"
                    onClick={() => handleQtyChange(item.id, item.qty - 1)}
                  >
                    -
                  </Button>
                  <Text mx={4}>{item.qty}</Text>
                  <Button
                    size="sm"
                    onClick={() => handleQtyChange(item.id, item.qty + 1)}
                  >
                    +
                  </Button>
                </Flex>

                <VStack spacing={2}>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <MdDeleteForever />
                  </Button>

                  <Button
                    size="sm"
                    fontSize="12px"
                    variant="outline"
                    colorScheme="teal"
                    w="50px"
                  >
                    ❤️
                  </Button>
                </VStack>
              </HStack>
            ))}
          </VStack>

          {/* Price Summary */}
          <Box border="1px solid #e2e8f0" p={4} mt={8} borderRadius="md">
            <Text
              fontSize={["lg", "xl"]}
              fontWeight="bold"
              textAlign="center"
              mb={4}
            >
              PRICE SUMMARY
            </Text>
            <Divider />
            <HStack justify="space-between" py={2} fontSize={["sm", "md"]}>
              <Text>Total MRP (Incl. of taxes)</Text>
              <Text fontWeight="bold">₹{totalMRP}</Text>
            </HStack>
            <HStack justify="space-between" py={2} fontSize={["sm", "md"]}>
              <Text>Shipping Charges</Text>
              <Text fontWeight="bold" color="green.500">
                FREE
              </Text>
            </HStack>
            <HStack justify="space-between" py={2} fontSize={["sm", "md"]}>
              <Text>Bag Discount</Text>
              <Text fontWeight="bold" color="red.500">
                - ₹301
              </Text>
            </HStack>
            <Divider />
            <HStack justify="space-between" py={2} fontSize={["sm", "md"]}>
              <Text fontWeight="bold">Total</Text>
              <Text fontWeight="bold" color="teal.500">
                ₹{totalMRP - 301}
              </Text>
            </HStack>
            <Link to="/checkout">
              <Button colorScheme="teal" w="100%" mt={4}>
                Checkout
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;
