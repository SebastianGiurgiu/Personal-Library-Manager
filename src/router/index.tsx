import { Navigate, useRoutes } from "react-router-dom";
import BookList from "../pages/BookList";
import Book from "../pages/Book";
import AddBokk from "../pages/AddBook";

export default function Router() {
  return useRoutes([
    {
      path: "/books",
      element: (
        <BookList />
      ),
    },
    {
      path: "/books/add",
      element: (
        <AddBokk />
      ),
    },
    {
      path: "/books/:id",
      element: (
        <Book readonly={true} />
      ),
    },
    {
      path: "/books/edit/:id",
      element: (
        <Book />
      ),
    },
    {
      path: '*',
      element: <Navigate to="/books" />,
    },
  ]);
}