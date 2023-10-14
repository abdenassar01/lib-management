import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./app/features/authentication/components/signin";
import BooksList from "./app/features/bookList/components/booksList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/protectes",
        element: <BooksList />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
