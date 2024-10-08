import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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

const ProductPage = () => {
  const { id } = useParams();
  const { menData } = useSelector((state) => state.data);
  const product = menData.find((item) => item.id == id);
  const [mainImage, setMainImage] = useState(
    product ? product.Display_image : ""
  );

  if (!product)
    return (
      <Text textAlign="center" fontSize="2xl" mt={10}>
        Product not found!
      </Text>
    );

  return (
    <Box p={0} maxW="100%" mx="auto" mt="200px">
      <Grid gap={8}>
        {/* Main Product Image and Details */}
        <Flex justifyContent="space-evenly">
          {/* Main Product Image */}
          <Box maxW="100%">
            <Image
              src={mainImage}
              alt={product.Title}
              borderRadius="lg"
              boxSize="400px"
              objectFit="contain"
              boxShadow="lg"
              w="100%"
            />
          </Box>

          {/* Product Details */}
          <VStack align="start" spacing={4} ml={{ md: 4 }} w="30%">
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
              {product.sizes.map((size) => (
                <Badge key={size} colorScheme="blue" p={1} borderRadius="md">
                  {size}
                </Badge>
              ))}
            </HStack>

            <Divider my={4} />

            {/* Add to Cart Button */}
            <Flex w="full" justifyContent="space-between">
              <Button
                colorScheme="teal"
                size="lg"
                flexGrow={1}
                mr={4}
                onClick={() => console.log("Added to cart")}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                colorScheme="teal"
                size="lg"
                flexGrow={1}
              >
                Buy Now
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Grid>

      {/* Sidebar Images */}
      <VStack
        spacing={4}
        align="start"
        mt={2}
        position="absolute"
        top="420"
        left="200"
      >
        <Text fontWeight="bold">More Images:</Text>
        <HStack spacing={4}>
          {product.moreImage.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Product image ${index + 1}`}
              boxSize="75px"
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
  );
};

export default ProductPage;
