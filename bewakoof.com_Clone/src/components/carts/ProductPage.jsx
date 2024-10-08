import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/action/action"; // Import the action creator
import { RouterContext } from "../../context/UserContext";

const ProductPage = () => {
  const { isLogged, setIsLogged } = useContext(RouterContext);
  const { flag, user } = isLogged;
  const { id } = useParams();
  const dispatch = useDispatch(); // Use the dispatch hook
  const { menData, womenData, AllData } = useSelector(
    (state) => state.data.data
  );

  // Check each data set for the product
  const product =
    menData.find((item) => item.id == id) ||
    womenData.find((item) => item.id == id) ||
    AllData.find((item) => item.id == id);

  const [mainImage, setMainImage] = useState(
    product ? product.Display_image : ""
  );

  if (!product)
    return (
      <Text textAlign="center" fontSize="2xl" mt={10}>
        Product not found!
      </Text>
    );

  // Function to handle adding the product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Use the action creator
  };

  return (
    <Box
      p={0}
      maxW="100%"
      mx="auto"
      mt={{ base: "100px", lg: "160px" }}
      mb="200"
    >
      <Grid gap={8}>
        {/* Main Product Image and Details */}
        <Flex
          justifyContent={{
            base: "center",
            md: "center",
            lg: "space-evenly",
          }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          {/* Main Product Image */}
          <Box maxW="100%">
            <Image
              src={mainImage}
              alt={product.Title}
              borderRadius="lg"
              boxSize={{ base: "390px", md: "300", lg: "420px" }}
              objectFit="contain"
              w="100%"
            />
            <VStack
              spacing={4}
              align="start"
              mt={0}
              position="absolute"
              top={{ base: "420", md: "300", lg: "420" }}
              left={{ base: "5", md: "20", lg: "200" }}
            >
              <Text fontWeight="bold" m={{ base: "2", lg: "4" }}>
                More Images:
              </Text>
              <HStack spacing={4}>
                {product.moreImage &&
                  product.moreImage.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Product image ${index + 1}`}
                      boxSize={{ base: "57px", lg: "80px" }}
                      objectFit="cover"
                      borderRadius="md"
                      cursor="pointer"
                      border={mainImage === img ? "2px solid teal" : "none"}
                      onClick={() => setMainImage(img)}
                      transition="border 0.3s"
                      _hover={{ border: "2px solid teal" }}
                    />
                  ))}
              </HStack>
            </VStack>
          </Box>

          {/* Product Details */}
          <VStack
            align="start"
            spacing={4}
            ml={{ md: 4 }}
            w={{ base: "80%", lg: "30%" }}
            m="50"
            mt={{ base: "200", md: "120", lg: "10" }}
          >
            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
              {product.Title}
            </Text>

            {/* Price and Discount */}
            <HStack spacing={4}>
              <Text fontSize="xl" color="teal.500" fontWeight="bold">
                ₹{product.price}
              </Text>
              <Text
                fontSize="lg"
                color="gray.500"
                textDecoration="line-through"
              >
                ₹{product.strikeprice}
              </Text>
            </HStack>

            {/* Rating */}
            <HStack>
              <Badge colorScheme="green" p={1}>
                {product.rating} ⭐
              </Badge>
            </HStack>

            {/* Description */}
            <Text fontSize="md" color="gray.700" lineHeight="1.5">
              {product.description}
            </Text>

            {/* Available Sizes */}
            <HStack spacing={2} mt={4}>
              <Text fontWeight="bold">Available Sizes:</Text>
              {product.sizes &&
                product.sizes.map((size, index) => (
                  <Badge key={index} colorScheme="green">
                    {size}
                  </Badge>
                ))}
            </HStack>

            <Divider my={4} />

            {/* Add to Cart Button */}
            <Flex w="full" justifyContent="space-between">
              {flag ? (
                <Button
                  colorScheme="teal"
                  size="lg"
                  flexGrow={1}
                  mr={4}
                  onClick={handleAddToCart} // Call the addToCart function
                >
                  Add to Cart
                </Button>
              ) : (
                <Link to="/login">
                  <Button colorScheme="teal" size="lg" flexGrow={1} mr={4}>
                    Add to Cart
                  </Button>
                </Link>
              )}

              <Button
                variant="outline"
                colorScheme="teal"
                size="4"
                flexGrow={1}
              >
                Buy Now
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Grid>

      {/* Sidebar Images */}
    </Box>
  );
};

export default ProductPage;
