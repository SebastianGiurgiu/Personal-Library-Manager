import { Navigate, useRoutes } from "react-router-dom";
import BookList from "../pages/BookList";
import Book from "../pages/Book";

export default function Router() {
    return useRoutes([
      {
        path: "/books",
        element: (
          <BookList/>
        ),
      },
      {
        path: "/books/:id",
        element: (
          <Book/>
        ),
      },
      {
        path: "/books/add",
        element: (
          <Book/>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/books" />,
      },
    ]);
  }