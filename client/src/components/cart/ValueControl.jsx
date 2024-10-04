import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useCart } from "../../store/cartContext"; // Подключаем контекст корзины

export const ValueControl = ({ product }) => {
  const { cartItems, changeQuantity } = useCart();

  // Проверяем, есть ли переданный продукт
  const initialQuantity =
    cartItems.find((item) => item.id === product.id)?.quantity || 1;

  // Установка состояния количества
  const [quantity, setQuantity] = useState(initialQuantity);

  // Обработчик для уменьшения количества
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Уменьшаем количество в локальном состоянии
      changeQuantity(product.id, quantity - 1); // Обновляем количество товара в корзине
    } else {
      // Можно также добавить логику для удаления товара, если количество достигло 0
      // changeQuantity(product.id, 0); // Удалить товар из корзины, если количество 0
    }
  };

  // Обработчик для увеличения количества
  const handlePlus = () => {
    setQuantity(quantity + 1); // Увеличиваем количество в локальном состоянии
    changeQuantity(product.id, quantity + 1); // Обновляем количество товара в корзине
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "relative",
        width: 200,
        height: 58,
        border: "1px solid #DDDDDD",
        borderRadius: 3,
      }}
    >
      <button
        className="valueControl"
        style={{ left: 0 }}
        onClick={handleMinus}
      >
        -
      </button>
      <button
        className="valueControl"
        style={{ right: 0 }}
        onClick={handlePlus}
      >
        +
      </button>
      <Typography>{quantity}</Typography> {/* Отображаем текущее количество */}
    </Stack>
  );
};
