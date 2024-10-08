import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Divider,
  Heading,
  Text,
  Box,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import FandomSlider from "./FandomSlider";
import BottomSlider from "./BottomSlider";
import Categories from "../../../components/catProductPages/Catgories/Categories";
import { Link } from "react-router-dom";
// Function to truncate title to 20 words
const truncateTitle = (title) => {
  const words = title.split(" ");
  return words.length > 3 ? words.slice(0, 4).join(" ") + "..." : title;
};

// Custom Previous Arrow
const PreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsl(0deg 0% 100% / 40%)",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        left: "30px",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <SlArrowLeft style={{ fontSize: "20px", color: "black" }} />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsl(0deg 0% 100% / 40%)",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        right: "30px",
        zIndex: 1,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <SlArrowRight style={{ fontSize: "20px", color: "black" }} />
    </div>
  );
};

function Product() {
  const { menData, womenData, Sneakers } = useSelector(
    (state) => state.data.data
  );
  // const SellPRoduct = useSelector((state) => state.data.data.SellPRoduct);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-container" style={{ textAlign: "center" }}>
      <div className="slider-background">
        <Heading fontSize="22px" fontWeight="500" mb="15px">
          Men&apos;s Products
        </Heading>
        <Slider {...settings}>
          {menData.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                {" "}
                <Card
                  borderRadius="0"
                  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  margin="10px"
                >
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
                    <Stack spacing="3" textAlign="left" marginTop="10px">
                      <Flex justifyContent="space-between">
                        <Box>
                          <Heading
                            size={{ base: "sm", md: "md" }}
                            fontWeight="200"
                          >
                            Bewakoof®
                          </Heading>
                          <Text fontSize={{ base: "10px", md: "11px" }}>
                            {truncateTitle(product.Title)}
                          </Text>
                        </Box>
                        <Box>
                          <CiHeart size={30} />
                        </Box>
                      </Flex>
                      <Flex gap="10px" alignItems="center">
                        <Text
                          color="black"
                          fontSize={{ base: "16px", md: "18px" }}
                          fontWeight="bold"
                        >
                          ₹{product.price}
                        </Text>
                        <Text
                          as="s"
                          marginTop="5px"
                          color="gray.500"
                          fontSize={{ base: "10px", md: "12px" }}
                        >
                          ₹{product.strikeprice}
                        </Text>
                      </Flex>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-background">
        <Heading fontSize="22px" fontWeight="500" mb="15px">
          Women&apos;s Products
        </Heading>
        <Slider {...settings}>
          {womenData.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <Card
                  borderRadius="0"
                  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                  margin="10px"
                >
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
                  <CardBody marginLeft="-12px" marginTop="-12px">
                    <Stack textAlign="left">
                      <Flex justifyContent="space-between">
                        <Box>
                          <Heading
                            size={{ base: "ms", md: "sm" }}
                            fontWeight="200"
                            marginBottom="0px"
                            marginTop="0px"
                            fontSize="10px"
                          >
                            Bewakoof®
                          </Heading>
                          <Text fontSize={{ base: "10px", md: "11px" }}>
                            {truncateTitle(product.Title)}
                          </Text>
                        </Box>
                        <Box>
                          <CiHeart size={30} />
                        </Box>
                      </Flex>
                      <Flex gap="10px" alignItems="center">
                        <Text
                          color="black"
                          fontSize={{ base: "16px", md: "18px" }}
                          fontWeight="bold"
                        >
                          ₹{product.price}
                        </Text>
                        <Text
                          as="s"
                          marginTop="5px"
                          color="gray.500"
                          fontSize={{ base: "10px", md: "12px" }}
                        >
                          ₹{product.strikeprice}
                        </Text>
                      </Flex>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <FandomSlider />
      <Heading
        fontSize="2xl" // Size of the heading
        fontWeight="bold" // Bold font weight
        color="teal.600" // Teal color for the text
        textAlign="center" // Center the text
        textTransform="uppercase" // Uppercase text
        letterSpacing="wider" // Wider letter spacing
        mb={4} // Margin bottom for spacing below
      >
        Shop by Category
      </Heading>
      <Categories />

      <div className="slider-background" style={{ marginTop: "50px" }}>
        <Heading fontSize="22px" fontWeight="500" mb="15px">
          Super Sneakers
        </Heading>
        <Slider {...settings}>
          {Sneakers.map((product) => (
            <div key={product.id} className="product-card">
              <Card
                borderRadius="0"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                margin="10px"
              >
                <Image
                  src={product.image_url}
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
                  <Stack spacing="3" textAlign="left" marginTop="10px">
                    <Flex justifyContent="space-between">
                      <Box>
                        <Heading
                          size={{ base: "sm", md: "md" }}
                          fontWeight="200"
                        >
                          {product.brand}
                        </Heading>
                        <Text fontSize={{ base: "10px", md: "11px" }}>
                          {truncateTitle(product.Title)}
                        </Text>
                      </Box>
                      <Box>
                        <CiHeart size={30} />
                      </Box>
                    </Flex>
                    <Flex gap="10px" alignItems="center">
                      <Text
                        color="black"
                        fontSize={{ base: "16px", md: "18px" }}
                        fontWeight="bold"
                      >
                        ₹{product.price.discounted}
                      </Text>
                      <Text
                        as="s"
                        marginTop="5px"
                        color="gray.500"
                        fontSize={{ base: "10px", md: "12px" }}
                      >
                        ₹{product.price.actual}
                      </Text>
                    </Flex>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </div>
          ))}
        </Slider>
        <BottomSlider />
        <Box>
          {" "}
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/OOFsale-Sept-LandingPage-desktop-stealworthy-header-1727260132.jpg"
            alt="not found"
            objectFit="cover"
            width="100%"
            height="100%"
            borderRadius="md"
            // boxShadow="md"
            p="0"
            m="0"
          ></Image>{" "}
        </Box>
        {/* <Grid templateColumns="repeat(auto-fit, minmax(12rem, 1fr))" gap={8}>
          {SellPRoduct.map((image, index) => (
            <GridItem key={index} w="100%" h="350px" p="0" mt="0" border="none">
              <Image
                src={image}
                alt={`sell-product-${index}`}
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="md"

                // boxShadow="md"
              />
            </GridItem>
          ))}
        </Grid> */}
      </div>
      <style>{`
        .product-container {
          margin-top: 20px;
        }
        .product-card {
          text-align: left; /* Align card text to the left */
        }
        .slider-background {
          background-image: url('https://images.bewakoof.com/uploads/grid/app/product-scroll-sale--2--1727183520.jpg');
          background-size: cover;
          padding: 40px;
        }
      `}</style>
    </div>
  );
}

export default Product;
