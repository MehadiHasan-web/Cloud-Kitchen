import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Layout from './../Layout/Layout';


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
    ],
  },
]);