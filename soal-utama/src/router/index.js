import { createBrowserRouter } from "react-router-dom";
import Satu from "../pages/Satu";
import Tiga from "../pages/Tiga";
import Tujuh from "../pages/Tujuh";
import Sembilan from "../pages/Sembilan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Satu />,
  },
  {
    path: "/3",
    element: <Tiga />,
  },
  {
    path: "/7",
    element: <Tujuh />,
  },
  {
    path: "/9",
    element: <Sembilan />,
  },
]);

export default router;
