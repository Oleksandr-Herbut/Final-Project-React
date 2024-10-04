import { createSelector } from "@reduxjs/toolkit";
// Импортируем функцию `createSelector` из библиотеки Redux Toolkit для создания мемоизированных селекторов.
// Комментарии ниже закомментированы и не используются в коде, но они могут быть связаны с контекстом корзины:
// import { useContext } from "react";
// import { CartContext } from "./store/cartContext";

export const getDiscount = (original_price, discont_price) => {
  // Функция для вычисления процента скидки.
  return Math.round(100 - (discont_price * 100) / original_price);
  // Вычисляем процент скидки по формуле и округляем результат до целого числа.
};

export const getCartTotal = (productsInCart) => {
  // Функция для вычисления общей стоимости товаров в корзине.
  const total = productsInCart.reduce((acc, el) => {
    // Суммируем стоимость всех товаров в корзине.
    if (el.discont_price) {
      // Если у товара есть скидочная цена, добавляем ее.
      return acc + el.discont_price;
    }
    // Если скидочной цены нет, добавляем обычную цену товара.
    return acc + el.price;
  }, 0);
  // Начальное значение аккумулятора 0.
  return total;
  // Возвращаем итоговую сумму.
};

export const categories = (state) => state.categories.categories;
// Селектор для получения списка категорий из состояния Redux.

export const currentCategoryTitle = createSelector(
  // Используем `createSelector` для мемоизированного селектора.
  categories,
  // Берем список категорий из предыдущего селектора.
  (state, categoryId) => categoryId,
  // Получаем текущий ID категории.
  (categories, categoryId) =>
    categories.find((cat) => cat.id === categoryId)?.title
  // Ищем категорию по ID и возвращаем ее название.
);

const productsSlice = (state) => state.products;
// Селектор для получения раздела `products` из состояния.

const products = createSelector(productsSlice, (state) => state.products);
// Создаем мемоизированный селектор для получения списка товаров.

export const filter = (state) => state.filter;
// Селектор для получения фильтра из состояния.

export const filteredProducts = createSelector(
  // Селектор для получения отфильтрованных товаров на основе выбранной категории и фильтров.
  products, // Массив всех продуктов.
  filter, // Текущие фильтры.
  (_, categoryId) => categoryId,
  // Получаем ID текущей категории.
  (productsFromState, filterFromState, categoryId) => {
    const products = categoryId
      ? [
          ...productsFromState.filter(
            (product) => product.categoryId === Number(categoryId)
          ),
        ]
      : // Если категория выбрана, фильтруем товары по категории.
        [...productsFromState];
    // Если категория не выбрана, берем все товары.

    if (filterFromState.isDiscount) {
      // Если активирован фильтр "Только со скидкой".
      return (
        products
          .filter((product) => product.discont_price !== null)
          // Оставляем только товары со скидочной ценой.
          .filter((product) => {
            // Далее фильтруем по цене со скидкой.
            return (
              product.discont_price >= filterFromState.price.from &&
              product.discont_price <= filterFromState.price.to
            );
          })
          .sort((a, b) => {
            // Сортировка товаров в зависимости от выбранного критерия сортировки.
            if (filterFromState.sort === "newest") {
              return b.id - a.id; // По новизне (ID по убыванию).
            }
            if (filterFromState.sort === "price-low-high") {
              return a.discont_price - b.discont_price; // По возрастанию цены со скидкой.
            }
            if (filterFromState.sort === "price-high-low") {
              return b.discont_price - a.discont_price; // По убыванию цены со скидкой.
            }
            return a.id - b.id; // Если сортировка не указана, по умолчанию по ID.
          })
      );
    } else {
      // Если фильтр "Только со скидкой" не активен.
      return products
        .filter((product) => {
          // Фильтруем товары по цене, если скидки нет, используем обычную цену.
          return product.discont_price
            ? product.discont_price >= filterFromState.price.from &&
                product.discont_price <= filterFromState.price.to
            : product.price >= filterFromState.price.from &&
                product.price <= filterFromState.price.to;
        })
        .sort((a, b) => {
          // Сортировка товаров по аналогии с вышеуказанным блоком.
          if (filterFromState.sort === "newest") {
            return b.id - a.id;
          }
          if (filterFromState.sort === "price-low-high") {
            return (a.discont_price ?? a.price) - (b.discont_price ?? b.price);
          }
          if (filterFromState.sort === "price-high-low") {
            return (b.discont_price ?? b.price) - (a.discont_price ?? a.price);
          }
          return a.id - b.id;
        });
    }
  }
);
