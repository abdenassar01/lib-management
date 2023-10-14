import { createBrowserRouter } from "react-router-dom";
import Signin from "./app/features/authentication/components/signin";
import RootLayout from "./pages/panel/root-layout";
import ProtectedRoute from "./pages/panel/protecte-route";

export const router = createBrowserRouter([
  {
    index: true,
    element: <p>This is shop </p>,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/protected",
        element: <ProtectedRoute />,
      },
    ],
  },
]);
