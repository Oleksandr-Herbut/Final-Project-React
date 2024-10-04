import { Box, Stack, Typography, Button, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { getDiscount } from "../utils";
import { styled } from "@mui/material";
import { useState } from "react";
import { useCart } from "../store/cartContext"; // Импортируем наш хук корзины

export const ProductCard = ({ product, isSale }) => {
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false); // Добавляем состояние для уведомления

  const DiscountPrice = styled("div")({
    position: "absolute",
    top: 8,
    right: 8,
    width: 68,
    height: 34,
    backgroundColor: "#0D50FF",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: "34px",
    zIndex: 2,
  });

  const AddToCartButton = styled(Button)({
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    backgroundColor: "#0D50FF",
    color: "#FFFFFF",
    fontWeight: 600,
    textTransform: "none",
    opacity: 0,
    transition: "opacity 0.3s",
    "&:hover": {
      backgroundColor: "#333333",
      transform: "translateX(-50%)",
    },
  });

  const discount = getDiscount(product?.price, product?.discont_price);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Останавливаем переход по ссылке
    addToCart(product); // Добавляем продукт в корзину
    setOpenSnackbar(true); // Показываем уведомление после добавления в корзину
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Закрываем уведомление
  };

  return (
    <>
      <Link to={isSale ? `/sales/${product.id}` : `/products/${product.id}`}>
        <Box
          sx={{
            position: "relative",
            borderRadius: 3,
            width: 316,
            height: 422,
            border: "1px solid #DDDDDD",
            transition: "transform 0.4s",
            "&:hover": {
              transform: "scale(1.02)",
            },
            "&:hover .add-to-cart": {
              opacity: 1,
              transition: "opacity 0.3s",
            },
          }}
        >
          <Stack direction="column" gap={2} sx={{ position: "relative" }}>
            {product.discont_price && (
              <DiscountPrice>-{discount}%</DiscountPrice>
            )}
            <Box
              sx={{
                position: "relative",
                width: 314,
                height: 284,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                backgroundImage: `url('http://localhost:3333${product.image}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderBottom: "1px solid #DDDDDD",
              }}
            >
              <AddToCartButton
                className="add-to-cart"
                variant="contained"
                onClick={handleAddToCart}
              >
                Add to cart
              </AddToCartButton>
            </Box>
            <Typography noWrap className="shortenText" sx={{ paddingLeft: 4 }}>
              {product.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="flex-end"
              gap={2}
              sx={{ paddingLeft: 4 }}
            >
              {product.discont_price ? (
                <>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: 40 }}
                    variant="h3"
                  >
                    ${product.discont_price}
                  </Typography>
                  <Typography
                    sx={{ textDecoration: "line-through" }}
                    variant="crossed"
                  >
                    ${product.price}
                  </Typography>
                </>
              ) : (
                <Typography sx={{ fontWeight: 600, fontSize: 40 }} variant="h3">
                  ${product.price}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Box>
      </Link>

      {/* Уведомление о добавлении товара в корзину */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Продукт добавлен в корзину!
        </Alert>
      </Snackbar>
    </>
  );
};
