import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  Stack,
  Divider,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";

function SideFilter({
  setSizeFilter,
  setBrandFilter,
  setDesignFilter,
  setFitFilter,
  setRatingFilter,
  setSortBy,
}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDesigns, setSelectedDesigns] = useState([]);
  const [selectedFits, setSelectedFits] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSizeChange = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
    setSizeFilter([size]);
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands((prev) =>
      checked ? [...prev, value] : prev.filter((brand) => brand !== value)
    );
    setBrandFilter((prevBrands) =>
      checked
        ? [...prevBrands, value]
        : prevBrands.filter((brand) => brand !== value)
    );
  };

  const handleDesignChange = (event) => {
    const { value, checked } = event.target;
    setSelectedDesigns((prev) =>
      checked ? [...prev, value] : prev.filter((design) => design !== value)
    );
    setDesignFilter((prevDesigns) =>
      checked
        ? [...prevDesigns, value]
        : prevDesigns.filter((design) => design !== value)
    );
  };

  const handleFitChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFits((prev) =>
      checked ? [...prev, value] : prev.filter((fit) => fit !== value)
    );
    setFitFilter((prevFits) =>
      checked ? [...prevFits, value] : prevFits.filter((fit) => fit !== value)
    );
  };

  const handleRatingChange = (event) => {
    const { value, checked } = event.target;
    const ratingValue = parseFloat(value);
    setSelectedRating(checked ? ratingValue : null);
    setRatingFilter(checked ? ratingValue : 0);
  };

  const handleSortByChange = (event) => {
    const { value } = event.target;
    setSelectedSortBy(value);
    setSortBy(value);
  };

  return (
    <>
      {/* Filter Icon for Small Screens */}
      <IconButton
        icon={<FiFilter />}
        aria-label="Filter"
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="teal"
        boxShadow="lg"
        borderRadius="full"
        p="4"
        borderWidth="2px"
        borderColor="teal.500"
        bg="white"
        color="teal.500"
        _hover={{
          bg: "teal.100",
        }}
        _active={{
          bg: "teal.200",
        }}
        zIndex="10"
      />

      {/* Sidebar for Larger Screens */}
      <Box
        display={{ base: "none", md: "block" }}
        w="300px"
        mt="10"
        h="800px"
        overflowY="auto"
        p="4"
        position="sticky"
        top="0"
      >
        <FilterContent
          selectedSize={selectedSize}
          selectedBrands={selectedBrands}
          selectedDesigns={selectedDesigns}
          selectedFits={selectedFits}
          selectedRating={selectedRating}
          selectedSortBy={selectedSortBy}
          handleSizeChange={handleSizeChange}
          handleBrandChange={handleBrandChange}
          handleDesignChange={handleDesignChange}
          handleFitChange={handleFitChange}
          handleRatingChange={handleRatingChange}
          handleSortByChange={handleSortByChange}
        />
      </Box>

      {/* Drawer for Small Screens */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <FilterContent
              selectedSize={selectedSize}
              selectedBrands={selectedBrands}
              selectedDesigns={selectedDesigns}
              selectedFits={selectedFits}
              selectedRating={selectedRating}
              selectedSortBy={selectedSortBy}
              handleSizeChange={handleSizeChange}
              handleBrandChange={handleBrandChange}
              handleDesignChange={handleDesignChange}
              handleFitChange={handleFitChange}
              handleRatingChange={handleRatingChange}
              handleSortByChange={handleSortByChange}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function FilterContent({
  selectedSize,
  selectedBrands,
  selectedDesigns,
  selectedFits,
  selectedRating,
  selectedSortBy,
  handleSizeChange,
  handleBrandChange,
  handleDesignChange,
  handleFitChange,
  handleRatingChange,
  handleSortByChange,
}) {
  return (
    <Box>
      <Box mb="1" fontSize="12" fontWeight="bold" color="rgb(45 45 45 / 50%)">
        FILTERS
      </Box>
      <Accordion allowMultiple fontSize="15">
        <Divider />

        {/* Size Filter */}
        <AccordionItem border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Sizes
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing={2}>
              {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                <Checkbox
                  key={size}
                  value={size}
                  isChecked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                  colorScheme="teal"
                >
                  {size}
                </Checkbox>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <Divider />

        {/* Brand Filter */}
        <AccordionItem border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Brand
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing={2}>
              {["bewakoof®", "instafab plus", "chimpaaanzee", "recast"].map(
                (brand) => (
                  <Checkbox
                    key={brand}
                    value={brand}
                    isChecked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                    colorScheme="teal"
                  >
                    {brand}
                  </Checkbox>
                )
              )}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <Divider />

        {/* Design Filter */}
        <AccordionItem border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Design
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing={2}>
              {["Solid", "Washed", "Striped"].map((design) => (
                <Checkbox
                  key={design}
                  value={design}
                  isChecked={selectedDesigns.includes(design)}
                  onChange={handleDesignChange}
                  colorScheme="teal"
                >
                  {design}
                </Checkbox>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <Divider />

        {/* Fit Filter */}
        <AccordionItem border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Fit
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing={2}>
              {["Regular Fit", "Oversized Fit", "Relaxed Fit"].map((fit) => (
                <Checkbox
                  key={fit}
                  value={fit}
                  isChecked={selectedFits.includes(fit)}
                  onChange={handleFitChange}
                  colorScheme="teal"
                >
                  {fit}
                </Checkbox>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <Divider />

        {/* Rating Filter */}
        <AccordionItem border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Ratings
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing={2}>
              {[4.5, 4, 3.5].map((rating) => (
                <Checkbox
                  key={rating}
                  value={rating}
                  isChecked={selectedRating === rating}
                  onChange={handleRatingChange}
                  colorScheme="teal"
                >
                  {rating} and above
                </Checkbox>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <Divider />

        {/* Sort By */}
        <AccordionItem border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Sort by
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Stack spacing={2}>
              {[
                "Best Seller",
                "Newest",
                "Price Low to High",
                "Price High to Low",
              ].map((sortOption) => (
                <Checkbox
                  key={sortOption}
                  value={sortOption}
                  isChecked={selectedSortBy === sortOption}
                  onChange={handleSortByChange}
                  colorScheme="teal"
                >
                  {sortOption}
                </Checkbox>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default SideFilter;
