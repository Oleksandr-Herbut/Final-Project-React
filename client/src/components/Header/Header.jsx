import { Container, Toolbar, Stack, Badge, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useCart } from "../../store/cartContext";
export const Header = () => {
  const { cartItems } = useCart();
  return (
    <div className="container">
      <Toolbar>
        <Stack
          mb={3}
          mt={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <NavLink to="/">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ paddingTop: 8 }}
            >
              <circle cx="35" cy="35" r="35" fill="#0D50FF" />
              <path
                d="M33.4445 21.0557H37.5557M49.8891 35.4447C48.5187 46.4077 45.0927 51.8892 39.6112 51.8892H31.3889C25.9074 51.8892 22.4815 46.4077 21.1111 35.4447"
                stroke="white"
                strokeWidth="4.11114"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.4999 47.778V51.8891M31.3887 33.389V33.4096M39.611 33.389V33.4096M33.4443 43.6669C33.4443 45.0372 34.1295 45.7224 35.4999 45.7224C37.5554 45.7224 37.5554 45.0379 37.5554 43.6669H33.4443ZM21.1109 19L33.4443 20.9939L20.6216 34.7416C20.2617 35.1469 19.7588 35.397 19.2184 35.4396C18.6781 35.4821 18.1422 35.3137 17.7233 34.9697C17.4385 34.7389 17.2244 34.4326 17.1055 34.0858C16.9866 33.739 16.9678 33.3657 17.0511 33.0087L21.1109 19ZM49.8889 19L37.5554 20.9939L50.3781 34.7416C51.114 35.5802 52.4111 35.683 53.2764 34.9697C53.5613 34.7389 53.7754 34.4326 53.8942 34.0858C54.0131 33.739 54.0319 33.3657 53.9486 33.0087L49.8889 19Z"
                stroke="white"
                strokeWidth="4.11114"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>

          <Stack direction="row" gap={4}>
            <NavLink className={styles.navLink} to="/">
              Main page
            </NavLink>
            <NavLink className={styles.navLink} to="/categories">
              Categories
            </NavLink>
            <NavLink className={styles.navLink} to="/products">
              All products
            </NavLink>
            <NavLink className={styles.navLink} to="/sales">
              All sales
            </NavLink>
          </Stack>

          <NavLink to="/cart">
            <Badge
              badgeContent={cartItems.length}
              color="primary"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <svg
                width="44"
                height="48"
                viewBox="0 0 44 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 0C16.4961 0 12.0565 4.37372 12.0565 9.79592V11.7551H4.19492L4.10169 12.6122L0.124294 46.898L0 48H44L43.8757 46.898L39.8983 12.6122L39.8051 11.7551H31.9435V9.79592C31.9435 4.37372 27.5039 0 22 0ZM22 1.95918C26.4396 1.95918 29.9548 5.42219 29.9548 9.79592V11.7551H14.0452V9.79592C14.0452 5.42219 17.5604 1.95918 22 1.95918ZM5.99717 13.7143H12.0565V15.949C11.4622 16.2895 11.0621 16.9094 11.0621 17.6327C11.0621 18.7156 11.9516 19.5918 13.0508 19.5918C14.1501 19.5918 15.0395 18.7156 15.0395 17.6327C15.0395 16.9094 14.6395 16.2895 14.0452 15.949V13.7143H29.9548V15.949C29.3605 16.2895 28.9605 16.9094 28.9605 17.6327C28.9605 18.7156 29.8499 19.5918 30.9492 19.5918C32.0484 19.5918 32.9379 18.7156 32.9379 17.6327C32.9379 16.9094 32.5378 16.2895 31.9435 15.949V13.7143H38.0028L41.7627 46.0408H2.23729L5.99717 13.7143Z"
                  fill="#282828"
                />
              </svg>
            </Badge>
          </NavLink>
        </Stack>
      </Toolbar>
      <Box sx={{ borderBottom: "1px solid #DDDDDD", width: "100%" }} />
    </div>
  );
};
