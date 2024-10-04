import { Box, Stack, Typography } from "@mui/material";
import { OrderForm } from "../OrderForm";

export const OrderDetails = ({ items, total, handleClickOpen }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F1F3F4",
        borderRadius: 3,
        padding: 4,
        width: 548,
      }}
    >
      <Typography variant="h3" mb={3}>
        Order details
      </Typography>
      <Typography variant="h3" fontWeight={500} color="#8B8B8B">
        {items} items
      </Typography>
      <Stack
        direction="row"
        mb={4}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Typography variant="h3" fontWeight={500} color="#8B8B8B">
          Total
        </Typography>
        <Typography variant="h2">${total}</Typography>
      </Stack>
      <OrderForm type="cart" handleClickOpen={handleClickOpen} />
    </Box>
  );
};
