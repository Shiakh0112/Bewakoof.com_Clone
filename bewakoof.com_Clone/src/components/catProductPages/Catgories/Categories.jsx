import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import navigate

function Categories() {
  const Category = useSelector((state) => state.data.ShopCategory); // Get data from redux state
  const { AllData } = useSelector((state) => state.data.data); // Get data from redux state
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    setData(Category);
  }, [Category]);

  // Function to filter products and navigate
  function filterProduct(Categories) {
    const filteredCategory = AllData.filter(
      (cat) => cat.category === Categories
    );

    // Navigate to the products page with filtered data
    navigate(`/category/${Categories}`, {
      state: { filteredData: filteredCategory },
    });
  }

  return (
    <>
      <div>
        
        <Grid templateColumns="repeat(auto-fit, minmax(12rem, 1fr))" gap={8}>
          {data.map((ele) => (
            <GridItem
              key={ele.id}
              w="100%"
              h="350px"
              p="0"
              mt="0"
              border="none"
              onClick={() => filterProduct(ele.category)} // OnClick filter and navigate
            >
              <Image
                src={ele.CategoryImage}
                alt={ele.category}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Categories;
