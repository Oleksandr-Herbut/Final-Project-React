import { useSelector } from "react-redux";
// import { getAllDiscountProducts } from "../store/selectors";
import { Stack, Typography, Grid2 } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { Layout } from "../layouts/Layout";
// import { filter } from "lodash";
import { filteredProducts } from "../utils";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleDiscount } from "../store/filterSlice";
import { FilterComponent } from "../components/FilterComponent";

export const Sales = () => {
  const products = useSelector(filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleDiscount(true));
  }, []);

  return (
    <Layout>
      <div className="container">
        <Stack direction="row" alignItems="center" mb={5}>
          <Typography fontWeight={700} mr={4} variant="h2">
            All sales
          </Typography>
        </Stack>
        <FilterComponent sales={false} />
        <Grid2
          mb={12}
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {products.map((product) => (
            <ProductCard isSale={true} key={product.id} product={product} />
          ))}
        </Grid2>
      </div>
    </Layout>
  );
};
