import { CategoryCard } from "./CategoryCard";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CategoryBlock = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Stack direction="row" alignItems="center" mb={5}>
        <Typography fontWeight={700} mr={4} variant="h2">
          Categories
        </Typography>
        <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 910 }} />
        <Button
          style={{
            border: "1px solid gray",
            color: "#8B8B8B",
            fontSize: "14px",
            borderRadius: 8,
            borderColor: "#DDDDDD",
            fontWeight: "500",
            padding: "8px 16px",
          }}
          onClick={() => navigate("/categories")}
        >
          All categories
        </Button>
      </Stack>
      <Stack direction="row" gap={4} mb={13}>
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </Stack>
    </div>
  );
};
