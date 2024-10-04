import { Box, Grid2, Stack, Typography } from "@mui/material";
import { ValueControl } from "./ValueControl";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useCart } from "../../store/cartContext"; // Используем контекст корзины

export const CartProductCard = ({ product }) => {
  const { removeFromCart } = useCart(); // Достаём функцию удаления из контекста

  return (
    <Grid2
      spacing={4}
      container
      mb={2}
      sx={{
        border: "1px solid #DDDDDD",
        borderRadius: 3,
        width: { xxs: 340, xs: 460, sm: 720, md: 520, lg: 680, xl: 780 },
      }}
    >
      <Grid2 size={3}>
        <Box
          sx={{
            width: { lg: 200, md: 160, xs: 140, xxs: 100 },
            height: 180,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            backgroundImage: `url('http://localhost:3333${product.image}')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            borderRight: "1px solid #DDDDDD",
          }}
        ></Box>
      </Grid2>
      <Grid2 size={8} sx={{ ml: { xs: 4, xxs: 2 } }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", mt: 4 }}
        >
          <Link to={`/products/${product.id}`}>
            <Typography
              className="shortenText"
              mb={4}
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              {product.title}
            </Typography>
          </Link>
          <CloseIcon
            onClick={() => removeFromCart(product.id)} // Вызываем функцию удаления из контекста
            style={{ marginRight: 32, cursor: "pointer" }}
          />
        </Stack>
        <Stack direction="row" alignItems="flex-end">
          <ValueControl product={product} />
          {product.discont_price ? (
            <>
              <Typography
                fontWeight={500}
                variant="h3"
                sx={{
                  ml: { md: 4, xs: 2, xxs: 2 },
                  mr: { md: 2, xs: 1, xxs: 1 },
                }}
              >
                ${product.discont_price}
              </Typography>
              <Typography
                sx={{ textDecoration: "line-through", color: "#8B8B8B" }}
              >
                ${product.price}
              </Typography>
            </>
          ) : (
            <Typography
              fontWeight={500}
              variant="h3"
              sx={{ ml: { md: 4, xs: 2, xxs: 2 } }}
            >
              ${product.price}
            </Typography>
          )}
        </Stack>
      </Grid2>
    </Grid2>
  );
};
