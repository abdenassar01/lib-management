import { createBrowserRouter } from "react-router-dom";
import Signin from "./app/features/authentication/components/signin";
import RootLayout from "./pages/panel/root-layout";
import BooksList from "./app/features/bookList/components/booksList";
import Book from "./app/features/book/book";

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
				path: "/books",
				element: <BooksList />,
			},
			{
				path: "/books/add",
				element: <Book />,
			},
		],
	},
]);
