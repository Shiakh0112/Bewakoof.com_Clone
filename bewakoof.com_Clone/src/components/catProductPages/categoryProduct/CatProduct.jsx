import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  Stack,
  Grid,
  Heading,
  Text,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
import SideFilter from "../FilterSidebar/sideFilter";
import { CiHeart } from "react-icons/ci";

function CatProduct() {
  const [sizeFilter, setSizeFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [designFilter, setDesignFilter] = useState([]);
  const [fitFilter, setFitFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const { categoryName } = useParams();
  const location = useLocation();
  const { filteredData } = location.state || {};

  const filterProducts = () => {
    let filtered = filteredData;

    if (sizeFilter.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => sizeFilter.includes(size))
      );
    }

    if (brandFilter.length > 0) {
      filtered = filtered.filter((product) =>
        brandFilter.includes(product.brand)
      );
    }

    if (designFilter.length > 0) {
      filtered = filtered.filter((product) =>
        designFilter.includes(product.design)
      );
    }

    if (fitFilter.length > 0) {
      filtered = filtered.filter((product) => fitFilter.includes(product.fit));
    }

    if (ratingFilter > 0) {
      filtered = filtered.filter((product) => product.rating >= ratingFilter);
    }

    if (sortBy) {
      filtered.sort((a, b) =>
        sortBy === "low to high" ? a.price - b.price : b.price - a.price
      );
    }

    setDisplayedProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [sizeFilter, brandFilter, designFilter, fitFilter, ratingFilter, sortBy]);

  function truncateTitle(title, maxLength = 20) {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  }

  return (
    <Flex
      width="100%"
      p={16}
      gap="24"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-around"
      mx="auto"
      mt="100px"
    >
      {/* Sidebar Filter */}
      <Box
        position={{ base: "relative", md: "sticky" }}
        top={{ base: "0", md: "120px" }}
        left="100"
        h={{ base: "auto", md: "100vh" }}
        w={{ base: "67%", md: "250px" }}
        p={2}
        mb={{ base: 5, md: 0 }}
      >
        <Heading
          fontSize="2xl" // Size of the heading
          fontWeight="bold" // Bold font weight
          color="teal.600" // Teal color for the text
          textAlign="center" // Center the text
          textTransform="uppercase" // Uppercase text
          letterSpacing="wider" // Wider letter spacing
          mb={4} // Margin bottom for spacing below
        >
          {categoryName}
        </Heading>

        <SideFilter
          setSizeFilter={setSizeFilter}
          setBrandFilter={setBrandFilter}
          setDesignFilter={setDesignFilter}
          setFitFilter={setFitFilter}
          setRatingFilter={setRatingFilter}
          setSortBy={setSortBy}
        />
      </Box>

      {/* Filtered Products */}
      <Box p={2} mt="-15" width="100%">
        <Box mb={5}>
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
            alt="not found"
            objectFit="cover"
            width="100%"
            height="150px"
            borderRadius="md"
          />
        </Box>
        {displayedProducts && displayedProducts.length > 0 ? (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={5}
          >
            {displayedProducts.map((product) => (
              <Box key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <Card>
                    <Image
                      src={product.Display_image}
                      alt={product.Title}
                      objectFit="cover"
                      width="100%"
                      height={{
                        base: "250px",
                        sm: "300px",
                        md: "350px",
                        lg: "400px",
                      }}
                    />
                    <CardBody>
                      <Stack spacing="3" textAlign="left" mt="10px">
                        <Flex justifyContent="space-between">
                          <Box>
                            <Heading size="sm" fontWeight="200">
                              {product.brand}
                            </Heading>
                            <Text fontSize="xs">
                              {truncateTitle(product.Title)}
                            </Text>
                          </Box>
                          <Box>
                            <CiHeart size={20} />
                          </Box>
                        </Flex>
                        <Flex gap="10px" alignItems="center">
                          <Text color="black" fontSize="lg" fontWeight="bold">
                            ₹{product.price}
                          </Text>
                          <Text as="s" mt="5px" color="gray.500" fontSize="sm">
                            ₹{product.strikeprice}
                          </Text>
                        </Flex>
                      </Stack>
                    </CardBody>
                    <Divider />
                  </Card>
                </Link>
              </Box>
            ))}
          </Grid>
        ) : (
          <Text fontSize="lg" color="red.500">
            No products found
          </Text>
        )}
      </Box>
    </Flex>
  );
}

export default CatProduct;
