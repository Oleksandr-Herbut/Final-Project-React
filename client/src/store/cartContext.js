import React, { createContext, useContext, useState, useEffect } from "react";

// Создание контекста корзины
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Состояние для общей суммы
  const [total, setTotal] = useState(0);

  // Сохраняем изменения в корзине в localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Вычисляем общую сумму
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cartItems.reduce((sum, item) => {
        const itemPrice = item.discont_price ? item.discont_price : item.price;
        return sum + itemPrice * (item.quantity || 1); // Учитываем количество товаров
      }, 0);
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cartItems]);

  // Функция для добавления товаров в корзину
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      const updatedCart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCart);
    }
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Функция для изменения количества товара
  const changeQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Функция для очистки корзины
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        clearCart,
        addToCart,
        removeFromCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
