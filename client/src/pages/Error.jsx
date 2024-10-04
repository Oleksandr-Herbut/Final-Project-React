import { Button, Stack, Typography } from "@mui/material";
import errorImg from "../images/404.png";
import { Layout } from "../layouts/Layout";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <Layout>
      <div className="container">
        <Stack alignItems="center" mt={10} mb={10}>
          <img src={errorImg} alt="error" />
          <Typography mt={4} variant="h2">
            Page Not Found
          </Typography>
          <Typography
            color="#8B8B8B"
            sx={{ maxWidth: 664, textAlign: "center", mb: 4, mt: 2 }}
          >
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </Typography>
          <Link to="/">
            <Button
              variant="contained"
              sx={{ width: 209, height: 58, fontSize: 20 }}
            >
              Go Home
            </Button>
          </Link>
        </Stack>
      </div>
    </Layout>
  );
};
