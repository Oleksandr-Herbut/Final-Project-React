import { Grid2, Typography } from "@mui/material";
import { Layout } from "../layouts/Layout";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { filteredProducts, currentCategoryTitle } from "../utils";
import { useSelector } from "react-redux";
import { FilterComponent } from "../components/FilterComponent";

export const Category = () => {
  // const [products, setProducts] = useState({});
  const { categoryId } = useParams();
  const categoryProducts = useSelector((state) =>
    filteredProducts(state, Number(categoryId))
  );
  const category = useSelector((state) =>
    currentCategoryTitle(state, Number(categoryId))
  );

  // useEffect(() => {
  //   async function getProductsByCategory(id) {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3333/categories/${id}`
  //       );
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //       return error.message;
  //     }
  //   }
  //   getProductsByCategory(categoryId);
  // }, [categoryId]);

  return (
    <Layout>
      <div className="container">
        <Typography mb={5} variant="h2">
          {category}
        </Typography>
        <FilterComponent />
        <Grid2
          mb={12}
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {categoryProducts?.length > 0 ? (
            categoryProducts?.map((product) => (
              <Grid2 key={product?.id} size={3}>
                <ProductCard product={product} />
              </Grid2>
            ))
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Grid2>
      </div>
    </Layout>
  );
};
