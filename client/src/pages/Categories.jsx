import { useSelector } from "react-redux";
import { getCategories } from "../store/selectors";
import { Layout } from "../layouts/Layout";
import { CategoryCard } from "../components/CategoryCard";
import { Typography, Grid2 } from "@mui/material";

export const Categories = () => {
  const categories = useSelector(getCategories);

  return (
    <Layout>
      <Typography
        style={{ fontWeight: "700", fontSize: "64px" }}
        mb={5}
        variant="h2"
      >
        Categories
      </Typography>

      <Grid2
        mb={12}
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </Grid2>
    </Layout>
  );
};
