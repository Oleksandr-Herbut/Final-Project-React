import { Box, Button, Stack, Typography, Grid2 } from "@mui/material";
import { Layout } from "../layouts/Layout";
import { Link } from "react-router-dom";
import { CartProductCard } from "../components/cart/CartProductCard";
import { OrderDetails } from "../components/cart/OrderDetails";
import { useCart } from "../store/cartContext"; // Используем контекст корзины
import { useState } from "react";
import { DialogComponent } from "../components/cart/DialogComponent";

export const Cart = () => {
  const { cartItems, total, clearCart } = useCart(); // Получаем все функции и данные из одного вызова useCart
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    clearCart(); // Очищаем корзину
    setOpen(true); // Открываем диалоговое окно
  };

  return (
    <Layout>
      <div className="container">
        <DialogComponent open={open} setOpen={setOpen} />
        <Stack direction="row" alignItems="center" mb={5} mt={5}>
          <Typography variant="h2" sx={{ width: 900, fontWeight: 700 }}>
            Shopping Cart
          </Typography>
          <Box sx={{ borderBottom: "1px solid #DDDDDD", width: "100%" }} />
          <Link to="/">
            <Button
              sx={{
                border: "1px solid #DDDDDD",
                backgroundColor: "#FFFFFF",
                height: "fit-content",
                minWidth: 140,
                padding: "8px 16px",
                color: "#8B8B8B",
                borderRadius: 6,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Back to the store
            </Button>
          </Link>
        </Stack>

        {cartItems.length > 0 ? (
          <Grid2 container spacing={4}>
            <Grid2 xs={12} md={7}>
              {cartItems.map((product) => (
                <CartProductCard key={product.id} product={product} /> // Отображение карточки товара с кнопкой удаления
              ))}
            </Grid2>
            <Grid2 xs={12} md={5}>
              <OrderDetails
                items={cartItems.length}
                total={total} // Используем общую сумму из контекста
                handleClickOpen={handleClickOpen} // Передаём функцию для открытия диалога и очистки корзины
              />
            </Grid2>
          </Grid2>
        ) : (
          <Stack mb={8}>
            <Typography mb={4}>
              Looks like you have no items in your basket currently.
            </Typography>
            <Link to="/products">
              <Button
                variant="contained"
                sx={{ padding: "8px 32px", fontWeight: 600 }}
              >
                Continue shopping
              </Button>
            </Link>
          </Stack>
        )}
      </div>
    </Layout>
  );
};
