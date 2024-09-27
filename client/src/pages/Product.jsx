import { Box, Button, Stack, Typography, Snackbar, Alert } from "@mui/material";
import { Layout } from "../layouts/Layout";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getDiscount } from "../utils";
import { ValueControl } from "../components/cart/ValueControl";
import { styled } from "@mui/material";
import { useCart } from "../store/cartContext"; // Импортируем useCart

export const LinkBorderBtn = styled("button")({
  border: "1px solid #DDDDDD",
  backgroundColor: "#FFFFFF",
  height: "fit-content",
  minWidth: 140,
  padding: "8px 16px",
  color: "#8B8B8B",
  borderRadius: 6,
  fontSize: 16,
  cursor: "pointer",
});

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

export const Product = () => {
  const [product, setProduct] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false); // Добавляем состояние для уведомления
  const descriptionRef = useRef(null);
  const { productId } = useParams();
  const { addToCart, cartItems } = useCart(); // Деструктурируем addToCart и cartItems из useCart
  const API_URL = "http://localhost:3333";
  const discount = getDiscount(product?.price, product?.discont_price);

  useEffect(() => {
    async function getProduct(id) {
      try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        setProduct(response.data[0]);
      } catch (error) {
        console.log(error.message);
        return error.message;
      }
    }
    getProduct(productId);
  }, [productId]);

  const readMore = (e) => {
    descriptionRef.current.classList.toggle("description");
    e.target.textContent === "Show less"
      ? (e.target.textContent = "Read more")
      : (e.target.textContent = "Show less");
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Останавливаем переход по ссылке

    const existingProduct = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (existingProduct) {
      // Если продукт уже в корзине, увеличиваем количество
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      addToCart(updatedProduct);
    } else {
      // Если продукта еще нет в корзине, добавляем его с количеством 1
      const productToAdd = { ...product, quantity: 1 };
      addToCart(productToAdd);
    }

    setOpenSnackbar(true); // Показываем уведомление после добавления в корзину
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Закрываем уведомление
  };

  return (
    <Layout>
      <div className="container" style={{ marginTop: 40 }}>
        <Stack direction="row" gap={4} mb={10}>
          <Box sx={{ width: 548, height: 542 }}>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                borderRadius: 8,
                overflow: "hidden",
              }}
              src={`${API_URL}/${product?.image}`}
              alt={`${product?.title?.slice(0, 18)}...`}
            />
          </Box>
          <Box sx={{ maxWidth: 600 }}>
            <Typography mb={5} variant="h3" sx={{ maxWidth: 548 }}>
              {product?.title}
            </Typography>
            <Stack direction="row" alignItems="flex-end" mb={4}>
              {product.discont_price ? (
                <>
                  <Typography fontWeight={500} variant="h2" mr={4}>
                    ${product.discont_price}
                  </Typography>
                  <Typography
                    variant="crossed"
                    sx={{
                      fontSize: 40,
                      textDecoration: "line-through",
                      color: "#8B8B8B",
                    }}
                    mr={2}
                  >
                    ${product.price}
                  </Typography>
                  <DiscountPrice
                    style={{ position: "static", alignSelf: "flex-start" }}
                  >
                    -{discount}%
                  </DiscountPrice>
                </>
              ) : (
                <Typography variant="h2" mr={4}>
                  ${product.price}
                </Typography>
              )}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              mb={4}
            >
              {product.id && (
                <ValueControl product={product} /> // Передаем product как пропс
              )}
              <Button
                variant="contained"
                onClick={handleAddToCart} // Добавляем продукт в корзину при нажатии
                sx={{ width: 316, height: 58, ml: 4, fontSize: 20 }}
              >
                Add to cart
              </Button>
            </Stack>
            <Typography mb={2}>Description</Typography>
            <Typography
              className="description"
              ref={descriptionRef}
              variant="description"
            >
              {product?.description}
            </Typography>
            <Typography
              onClick={(e) => readMore(e)}
              mt={4}
              sx={{
                textDecoration: "underline",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Read more
            </Typography>
          </Box>
        </Stack>

        {/* Уведомление о добавлении товара в корзину */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} // Позиция уведомления
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Продукт добавлен в корзину!
          </Alert>
        </Snackbar>
      </div>
    </Layout>
  );
};
