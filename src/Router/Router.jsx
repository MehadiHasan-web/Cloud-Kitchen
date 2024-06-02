import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from './../Layout/Layout';
import Product from './../page/Product';


// router section start
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);