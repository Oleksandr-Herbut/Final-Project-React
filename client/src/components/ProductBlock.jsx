import { Box, Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { selectRandomProductsWithSale } from "../store/selectors";
import { Link } from "react-router-dom";

export const ProductBlock = () => {
  const sale_products = useSelector(selectRandomProductsWithSale);

  return (
    <div className="container">
      <Stack direction="row" alignItems="center" mb={5}>
        <Typography fontWeight={700} mr={4} variant="h2">
          Sales
        </Typography>
        <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 1190 }} />
        <Link to="/sales">
          <Button
            style={{
              border: "1px solid gray",
              color: "#8B8B8B",
              fontSize: "14px",
              borderRadius: 8,
              borderColor: "#DDDDDD",
              fontWeight: "500",
              padding: "8px 16px",
              textAlign: "center",
            }}
          >
            All sales
          </Button>
        </Link>
      </Stack>
      <Stack direction="row" gap={4} mb={13}>
        {sale_products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Stack>
    </div>
  );
};
