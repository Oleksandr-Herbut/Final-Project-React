import { Container } from "@mui/material";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
