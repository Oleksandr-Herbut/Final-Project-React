import { createSelector } from "@reduxjs/toolkit";
import sampleSize from "lodash/sampleSize";

export const getCategories = (state) => state.categories?.categories;
export const getProducts = (state) => state.products.products;

export const selectRandomCategory = createSelector(
  getCategories,
  (categories) => {
    return sampleSize(categories, 4);
  }
);

export const getDiscountProducts = createSelector(getProducts, (products) => {
  return products.filter((product) => product.discont_price !== null);
});

export const getAllDiscountProducts = createSelector(
  getDiscountProducts,
  (products) => {
    return products;
  }
);

export const selectRandomProductsWithSale = createSelector(
  getProducts,
  (products) => {
    const sale_products = products
      .filter((product) => product.discont_price)
      .slice(0, 4);
    return sampleSize(sale_products, 4);
  }
);
