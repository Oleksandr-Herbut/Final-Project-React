import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Category } from "../pages/Category";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categortyId" element={<Category />} />
    </Routes>
  );
};
