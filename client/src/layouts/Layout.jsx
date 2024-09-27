import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { useEffect } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useBreadcrumbs } from "../CustomHook";

export const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useBreadcrumbs();

  return (
    <div className="container">
      <Header />
      <Breadcrumbs />
      {children}
      <Footer />
    </div>
  );
};
