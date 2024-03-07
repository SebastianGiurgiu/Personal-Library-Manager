import React, { createContext, useState, useContext, ReactNode } from "react";

import { IBook } from "../models/books";

interface BooksContextProps {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

interface BooksProviderProps {
  children: ReactNode;
}

const BooksContext = createContext<BooksContextProps | undefined>(undefined);

// Define the BooksProvider component to manage global books state
export const BooksProvider: React.FC<BooksProviderProps> = ({ children }) => {
  // Global state to manage the books across the application
  const [books, setBooks] = useState<IBook[]>([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = (): BooksContextProps => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }

  return context;
};
