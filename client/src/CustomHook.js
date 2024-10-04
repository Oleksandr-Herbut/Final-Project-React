import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import BreadcrumbsContext from "./context/breadcrumbsContext";
import { useSelector } from "react-redux";

// Определяем объект `pageTitle`, который содержит заголовки страниц по ключу, представляющему первую часть URL.
const pageTitle = {
  products: "All Products",
  categories: "All Categories",
  sales: "All Sales",
  cart: "Shopping cart",
};

// Список страниц, для которых не будут генерироваться хлебные крошки.
const pagesBlacklist = ["cart", "404"];

// Хук `useBreadcrumbs`, который используется для формирования хлебных крошек на основе маршрута и данных из состояния.
export const useBreadcrumbs = () => {
  const location = useLocation();
  // Получаем текущее местоположение (URL) с помощью хука `useLocation`.

  const { setCrumbs } = useContext(BreadcrumbsContext);
  // Используем контекст `BreadcrumbsContext` для установки массива хлебных крошек через функцию `setCrumbs`.

  const { productId, categoryId } = useParams();
  // Извлекаем параметры `productId` и `categoryId` из URL с помощью хука `useParams`.

  const page = location.pathname
    .split("/")
    .filter((pathItem) => pathItem !== "")[0];
  // Разбиваем путь на части по символу `/`, фильтруем пустые значения и берем первую часть как основную страницу.

  const crumbsArray =
    page && !pagesBlacklist.includes(page)
      ? [
          // Если текущая страница не входит в "черный список", начинаем формировать массив хлебных крошек.
          {
            path: "/",
            label: "Main Page", // Добавляем главную страницу как первую крошку.
          },
          {
            path: `/${page}`,
            label: pageTitle[page], // Добавляем текущую страницу с названием из `pageTitle`.
          },
        ]
      : [];
  // Если страница входит в "черный список" (например, корзина или страница 404), массив крошек остается пустым.

  const category = useSelector((state) =>
    state.categories.categories.find(
      (category) => category.id === Number(categoryId)
    )
  );
  // Используем хук `useSelector` для извлечения категории из состояния Redux, проверяя совпадение по `categoryId`.

  if (category) {
    crumbsArray.push({
      path: `/${page}/${categoryId}`,
      label: category.title, // Если категория найдена, добавляем ее в хлебные крошки.
    });
  }

  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === Number(productId))
  );
  // Аналогично ищем продукт в состоянии по `productId`.

  if (category && product) {
    crumbsArray.push({
      path: `/${page}/${categoryId}/${productId}`,
      label: product.title, // Если найдены и категория, и продукт, добавляем крошку для продукта.
    });
  }

  if (!category && product) {
    crumbsArray.push({
      path: `/${page}/${productId}`,
      label: product.title, // Если категория не найдена, но продукт есть, добавляем крошку только для продукта.
    });
  }

  useEffect(() => {
    // Хук `useEffect` используется для обновления хлебных крошек при изменении местоположения.
    setCrumbs(crumbsArray);
  }, [location]); // Зависимость — изменение URL.
};
