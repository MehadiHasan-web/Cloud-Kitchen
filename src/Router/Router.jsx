import { createBrowserRouter } from "react-router-dom";
import Layout from './../Layout/Layout';
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import Message from "../pages/Message/Message";


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
        element: <Product></Product>
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
  {
    path: '/message',
    element: <Message></Message>
  }
]);