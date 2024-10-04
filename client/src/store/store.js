import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import discountReducer from "./dicountSlice";
import filterReducer from "./filterSlice";
import cartReducer from "./cartSlice";

const mainReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  discount: discountReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
