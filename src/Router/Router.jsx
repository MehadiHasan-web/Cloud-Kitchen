import {createBrowserRouter} from "react-router-dom";
import Layout from './../Layout/Layout';
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";


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
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);