import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Flex,
  ListItem,
  UnorderedList,
  Input,
  Button,
  Text,
  List,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Spacer,
} from "@chakra-ui/react";
import { CiSearch, CiHeart, CiMobile2 } from "react-icons/ci";
import { PiBagSimple } from "react-icons/pi";
import logo from "../../../assets/ic-desktop-bwkf-trademark-logo.svg";
import { useSelector } from "react-redux";
import { RouterContext } from "../../../context/UserContext";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FaUser, FaFemale, FaQuestionCircle } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { isLogged, setIsLogged } = useContext(RouterContext);
  const { flag, user } = isLogged;
  let navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.cartCount);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  function HandleNavigate(path) {
    navigate(path);
  }
  const naveArray = {
    leftArray: [
      "Offers",
      "Fanbook",
      <span key="downloadApp">
        <Flex alignItems="center" gap="5px">
          <CiMobile2 size={12} /> Download App
        </Flex>
      </span>,
      "TriBe Membership",
      "Find a store near me",
    ],
    rightArray: ["Contact Us", "Track Order"],
    SearchNave: ["MEN", "WOMEN", "MOBILE COVERS"],
    MainNave: [
      { name: "OOF SALE", path: "/oof-sale" },
      { name: "MEN", path: "/men" },
      { name: "WOMEN", path: "/women" },
      { name: "WINTERWEAR", path: "/" },
      { name: "ACCESSORIES", path: "/" },
      { name: "SNEAKERS", path: "/sneakers" },
      { name: "BWKF X GOOGLE", path: "/" },
      { name: "BEWAKOOF AIR", path: "/" },
      { name: "HEAVY DUTY", path: "/" },
      { name: "CUSTOMIZATION", path: "/" },
      { name: "OFFICIAL MERCH", path: "/" },
      { name: "PLUS SIZE", path: "/" },
    ],
  };

  const megaMenuData = {
    MEN: {
      items: ["T-Shirts", "Jeans", "Joggers", "Shirts", "Sweatshirts"],
      image: "https://example.com/men-image.jpg",
    },
    WOMEN: {
      items: ["Tops", "Jeans", "Dresses", "Sweatshirts", "Jackets"],
      image: "https://example.com/women-image.jpg",
    },
    "MOBILE COVERS": {
      items: [
        "iPhone Covers",
        "Samsung Covers",
        "OnePlus Covers",
        "Designer Covers",
        "Custom Covers",
      ],
      image: "https://example.com/mobile-covers-image.jpg",
    },
  };
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%" // Ensure full width
        zIndex="1000"
      >
        <Box
          display={{ base: "block", md: "none" }}
          sx={{
            "@media (max-width: 1300px)": {
              display: "block",
            },
          }}
        >
          <Flex alignItems="center" zIndex="100" bg="white" pt="2">
            {/* Hamburger Icon */}

            <Box ml="4" display="flex" alignItems="center">
              <Image
                onClick={toggleDrawer}
                src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg"
                alt="Logo"
                width="30px" // Adjust size as needed
                height="30px" // Adjust size as needed
                objectFit="contain" // Keeps the aspect ratio of the image
              />
            </Box>

            {/* Image Beside Hamburger Icon */}
            <Box ml="2" display="flex" alignItems="center">
              <Link to="/">
                <Image
                  src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
                  alt="Logo"
                  width="30px" // Adjust size as needed
                  height="30px" // Adjust size as needed
                  objectFit="contain" // Keeps the aspect ratio of the image
                />
              </Link>
            </Box>

            <Spacer />

            {/* Icons on Right Side */}
            <Box display="flex" alignItems="center" gap="4">
              <CiSearch fontSize="24px" cursor="pointer" />
              <Box position="relative">
                <Flex gap="4" ml="5" position="relative" right="5">
                  <CiHeart size={25} />

                  {flag ? (
                    <>
                      <Box position="relative">
                        <Link to="cart">
                          <PiBagSimple size={25} />
                        </Link>
                        <Box
                          position="absolute"
                          top="-5px"
                          right="-7px"
                          bg="#fdd835"
                          color="black"
                          borderRadius="50%"
                          width="18px"
                          height="18px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="10px"
                        >
                          {cartCount}
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box position="relative">
                        <Link to="/login">
                          <PiBagSimple size={25} />
                        </Link>
                        <Box
                          position="absolute"
                          top="-5px"
                          right="-7px"
                          bg="#fdd835"
                          color="black"
                          borderRadius="50%"
                          width="18px"
                          height="18px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="10px"
                        >
                          0
                        </Box>
                      </Box>
                    </>
                  )}
                </Flex>
              </Box>
            </Box>
          </Flex>
          {/* Drawer for sidebar */}
          <Drawer isOpen={isOpen} placement="left" onClose={toggleDrawer}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Welcome Guest</DrawerHeader>

              <DrawerBody>
                {/* Welcome and Login Section */}
                <Box mb="4">
                  <Text fontSize="sm" color="gray.600">
                    <Link to="/login">Login / Sign Up</Link>
                  </Text>
                </Box>

                {/* Shop In Section */}
                <Box mb="4">
                  <Text fontSize="xs" color="gray.500" mb="2">
                    <Link to="/">SHOP IN</Link>
                  </Text>
                  <List spacing={3}>
                    <ListItem display="flex" alignItems="center" mt="4">
                      Men <FaUser size={20} style={{ marginLeft: "auto" }} />
                    </ListItem>
                    <ListItem display="flex" alignItems="center" mt="4">
                      Women{" "}
                      <FaFemale size={20} style={{ marginLeft: "auto" }} />
                    </ListItem>
                    <ListItem display="flex" alignItems="center" mt="4">
                      Shop by Fandom{" "}
                      <FaQuestionCircle
                        size={20}
                        style={{ marginLeft: "auto" }}
                      />
                    </ListItem>
                    <ListItem mt="4">Mobile Covers</ListItem>
                  </List>
                </Box>

                <Divider />

                {/* Contact Us Section */}
                <Box mb="4" mt="4">
                  <Text fontSize="xs" color="gray.500" mb="2">
                    CONTACT US
                  </Text>
                  <List spacing={3}>
                    <ListItem>Help & Support</ListItem>
                    <ListItem>Feedback & Suggestions</ListItem>
                    <ListItem>Become a Seller</ListItem>
                  </List>
                </Box>

                <Divider />

                {/* About Us Section */}
                <Box mb="4" mt="4">
                  <Text fontSize="xs" color="gray.500" mb="2">
                    ABOUT US
                  </Text>
                  <List spacing={3}>
                    <ListItem>Our Story</ListItem>
                    <ListItem>Fanbook</ListItem>
                    <ListItem>Blog</ListItem>
                  </List>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <Box
          display={{ base: "none", md: "block", lg: "none", xl: "block" }}
          sx={{
            "@media (max-width: 1220px)": {
              display: "none",
            },
          }}
        >
          <Box
            bg="#eeeeee"
            w="100%"
            p="7px"
            color="rgb(48 48 48)"
            fontSize="11px"
          >
            <Flex justifyContent="center" gap="570px">
              <UnorderedList display="flex" gap="30px" listStyleType="none">
                {naveArray.leftArray.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </UnorderedList>
              <UnorderedList display="flex" gap="30px" listStyleType="none">
                {naveArray.rightArray.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Flex>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            bg="white"
            p="3px"
            color="rgb(48 48 48)"
            h="52px"
            fontSize="14px"
            m="auto"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              h="100%"
              gap="220px"
            >
              <Box display="flex" gap="40px" alignItems="center">
                <Link to="/">
                  <Image src={logo} alt="Logo" width="147px" />
                </Link>
                <Box position="relative">
                  <UnorderedList display="flex" gap="30px" listStyleType="none">
                    {naveArray.SearchNave.map((item, index) => (
                      <ListItem
                        key={index}
                        letterSpacing="1px"
                        position="relative"
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {item}

                        {/* Mega Menu Box */}
                        {hoveredItem === item && (
                          <Box
                            position="absolute"
                            top="100%"
                            left="0"
                            mt="8px"
                            p="4"
                            bg="white"
                            border="1px solid #ccc"
                            boxShadow="lg"
                            w="300px"
                            display="flex"
                            zIndex="10"
                          >
                            {/* Items List */}
                            <Box flex="1">
                              {megaMenuData[item].items.map((menuItem, idx) => (
                                <Text
                                  key={idx}
                                  py="2"
                                  px="4"
                                  _hover={{ bg: "gray.100" }}
                                >
                                  {menuItem}
                                </Text>
                              ))}
                            </Box>

                            {/* Image */}
                            <Box flex="1">
                              <Image
                                src={megaMenuData[item].image}
                                alt={item}
                              />
                            </Box>
                          </Box>
                        )}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Flex alignItems="center">
                  <Box
                    position="relative"
                    border="0.5px solid #80808061"
                    borderRadius="6px"
                    h="40px"
                    display="flex"
                    alignItems="center"
                    pr="20px"
                    _after={{
                      content: '""',
                      position: "absolute",
                      right: "-14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "1px",
                      height: "25px",
                      backgroundColor: "#80808061",
                    }}
                  >
                    <form
                      onSubmit={handleSearchSubmit}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <CiSearch size={30} style={{ paddingLeft: "7px" }} />
                      <Input
                        width="300px"
                        border="none"
                        outline="none"
                        placeholder="Search by product, category or collection..."
                        h="30px"
                        _focus={{
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                        }}
                        _placeholder={{
                          fontSize: "12px",
                          paddingLeft: "5px",
                        }}
                        fontSize="13"
                      />
                    </form>
                  </Box>
                  <Box m="auto" ml="25px">
                    <Flex gap="10px" alignItems="center" fontSize="18px">
                      {flag ? (
                        <>
                          <Button>Hi , {user}</Button>
                          <Button
                            colorScheme="orange"
                            variant="outline"
                            borderColor="orange.300"
                            onClick={() => {
                              setIsLogged({ flag: false, user: "" });
                              HandleNavigate("/");
                            }}
                          >
                            Log out
                          </Button>
                        </>
                      ) : (
                        <Button backgroundColor="#fdd835" h="8">
                          {" "}
                          <Link to="/login">Login</Link>
                        </Button>
                      )}
                      {flag ? (
                        <>
                          <CiHeart size={25} />
                          <Box position="relative">
                            <Link to="cart">
                              <PiBagSimple size={25} />
                            </Link>
                            <Box
                              position="absolute"
                              top="-5px"
                              right="-7px"
                              bg="#fdd835"
                              color="black"
                              borderRadius="50%"
                              width="18px"
                              height="18px"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize="10px"
                            >
                              {cartCount}
                            </Box>
                          </Box>
                        </>
                      ) : (
                        <>
                          <CiHeart size={25} />
                          <Box position="relative">
                            <Link to="/login">
                              <PiBagSimple size={25} />
                            </Link>
                            <Box
                              position="absolute"
                              top="-5px"
                              right="-7px"
                              bg="#fdd835"
                              color="black"
                              borderRadius="50%"
                              width="18px"
                              height="18px"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize="10px"
                            >
                              0
                            </Box>
                          </Box>
                        </>
                      )}
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        <hr />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          bg="white"
          w="100%"
          color="black"
          h="45px"
          fontSize="18px"
          fontWeight="400"
          overflowX="auto" // Allow horizontal scrolling
          css={{
            /* Hide scrollbar */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none", // IE and Edge
            "scrollbar-width": "none", // Firefox
          }}
        >
          <Flex
            alignItems="center"
            h="100%"
            display={isOpen ? "none" : "block"}
          >
            <UnorderedList
              display="flex"
              gap="55px"
              listStyleType="none"
              whiteSpace="nowrap"
            >
              {naveArray.MainNave.map((item) => (
                <ListItem pr="20px" key={item.name} textTransform="capitalize">
                  <Link to={item.path}>{item.name}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
