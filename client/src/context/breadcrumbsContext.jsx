import { createContext } from "react";

const BreadcrumbsContext = createContext([
  {
    url: "/",
    title: "Main page",
  },
]);

export default BreadcrumbsContext;
