import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from './../Layout/Layout';
import Product from './../page/Product';
import Home from "../pages/Home/Home";


// router section start
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);