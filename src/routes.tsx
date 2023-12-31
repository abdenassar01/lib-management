import { createBrowserRouter } from "react-router-dom";
import Signin from "./app/features/authentication/components/signin";
import RootLayout from "./pages/panel/root-layout";
import BooksList from "./app/features/bookList/components/booksList";
import BookListBorrow from "./pages/bookList/book-list";
import Book from "./app/features/book/book";
import BorrowHistory from "./app/features/borrowHistory/components/borrowHistory";

export const router = createBrowserRouter([
  {
    index: true,
    element: <BookListBorrow />,
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
        path: "/books",
        element: <BooksList />,
      },
      {
        path: "/borrowHisory",
        element: <BorrowHistory />,
      },
      {
        path: "/books/add",
        element: <Book />,
      }
    ],
  },
]);
