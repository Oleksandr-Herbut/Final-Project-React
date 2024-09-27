import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Category } from "../pages/Category";
import { Products } from "../pages/Products";
import { Product } from "../pages/Product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../store/actionCreators";
import { getProducts } from "../store/actionCreators";
import { Sales } from "../pages/Sales";
import { Cart } from "../pages/Cart";
import { Error } from "../pages/Error";

export const MainRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<Category />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
