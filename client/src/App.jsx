import { MainRouter } from "./routes/MainRouter";
import { CartProvider } from "./store/cartContext";
import BreadcrumbsContext from "./context/breadcrumbsContext";
import { useState } from "react";

function App() {
  const [crumbs, setCrumbs] = useState([]);
  return (
    <BreadcrumbsContext.Provider value={{ crumbs, setCrumbs }}>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </BreadcrumbsContext.Provider>
  );
}

export default App;
