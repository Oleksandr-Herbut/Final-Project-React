import { Grid2, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { FilterComponent } from "../components/FilterComponent";
import { Layout } from "../layouts/Layout";
// import { filter } from "../utils";
// import { useEffect, useState } from "react";
import { filteredProducts } from "../utils";

export const Products = () => {
  //const [shownProducts, setShownProducts] = useState([]); // Состояние для отфильтрованных продуктов
  // const { products } = useSelector((state) => state.products); // Получаем список всех продуктов
  const products = useSelector(filteredProducts);
  // const filterObject = useSelector((state) => state.filter); // Получаем объект фильтра

  // useEffect(() => {
  //   const result = filter(filterObject, products); // Применяем фильтрацию к продуктам
  //   setShownProducts(result); // Устанавливаем отфильтрованные продукты
  // }, [filterObject, products]); // Выполняем фильтрацию при изменении фильтров или списка продуктов

  return (
    <Layout>
      <div className="container">
        <Typography fontWeight={700} mb={5} variant="h2">
          All products
        </Typography>
        <FilterComponent /> {/* Отображение компонента фильтра */}
        <Grid2
          mb={12}
          justifyContent="center"
          container
          rowSpacing={4}
          columnSpacing={{ xxs: 1, xs: 1, sm: 2, md: 3 }}
        >
          {products?.length > 0 ? (
            products?.map((product) => (
              <Grid2 key={product?.id} size="auto">
                <ProductCard page="products" product={product} />
              </Grid2>
            ))
          ) : (
            <Typography>No items found</Typography>
          )}
        </Grid2>
      </div>
    </Layout>
  );
};
