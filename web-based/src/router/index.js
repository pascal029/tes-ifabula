import { createBrowserRouter, redirect } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Perusahaan from "../pages/Perusahaan";
import Transaksi from "../pages/Transaksi";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.getItem("token");
      if (access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Home />,
    loader: () => {
      const access_token = localStorage.getItem("token");
      if (!access_token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/transaksi",
        element: <Transaksi />,
      },
      {
        path: "/Perusahaan",
        element: <Perusahaan />,
      },
    ],
  },
]);
export default router;
