import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./pages/protecte-route";
import Home from "./pages/home";
import Signin from "./app/features/authentication/components/signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/protectes",
        element: <ProtectedRoute />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
