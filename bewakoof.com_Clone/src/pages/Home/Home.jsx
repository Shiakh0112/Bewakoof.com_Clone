import React from "react";
import Navbar from "./Navbar/Navbar";
import SliderMain from "./Header/ManSlider/SliderMain";
import { Image, Box, Heading } from "@chakra-ui/react";
import Product from "./product/Product";
import FooterPart from "../../components/Footer/FooterPart";
function Home() {
  return (
    <div>
      <Navbar />
      <SliderMain />
      <Product />
      <div style={{ textAlign: "center" }}>
        <Heading
          fontSize="2xl" // Size of the heading
          fontWeight="bold" // Bold font weight
          color="teal.600" // Teal color for the text
          textAlign="center" // Center the text
          textTransform="uppercase" // Uppercase text
          letterSpacing="wider" // Wider letter spacing
          // Margin bottom for spacing below
        >
          Our Best Picks
        </Heading>
        <SliderMain />
        <Box mt="60">
          {" "}
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
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
      </div>
    </div>
  );
}

export default Home;
