import { Box, Button, Typography } from "@mui/material";
import banner from "../images/img.png";
import { useNavigate } from "react-router-dom";

export const FirstBanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          color: "#FFFFFF",
          height: 600,
          padding: "80px 40px",
          mb: 10,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography
          sx={{ maxWidth: 1440, fontWeight: "700" }}
          mb={5}
          variant="h1"
        >
          Amazing Discounts on Pets Products!
        </Typography>
        <Button
          onClick={() => navigate("/sales")}
          variant="contained"
          sx={{ padding: "14px 56px" }}
        >
          Check out
        </Button>
      </Box>
    </div>
  );
};
