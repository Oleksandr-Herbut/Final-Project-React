import { Link } from "react-router-dom";
import { useContext } from "react";
import BreadcrumbsContext from "../context/breadcrumbsContext";
import { Stack, Box } from "@mui/material";

export const Breadcrumbs = () => {
  const { crumbs } = useContext(BreadcrumbsContext);

  return (
    <div className="container">
      <Stack direction="row" alignItems="center" mt={5} mb={5}>
        {crumbs.map((crumb, index, array) => {
          if (array.length - 1 === index) {
            return (
              <Box
                style={{
                  border: "1px solid #DDDDDD  ",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  color: "#282828",
                  cursor: "pointer",
                }}
                key={crumb.path}
              >
                {crumb.label}
              </Box>
            );
          } else {
            return (
              <Link
                style={{
                  color: "#8B8B8B",
                  marginRight: 15,
                  border: "1px solid #DDDDDD ",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                key={crumb.path}
                to={crumb.path}
              >
                {crumb.label}
              </Link>
            );
          }
        })}
      </Stack>
    </div>
  );
};
