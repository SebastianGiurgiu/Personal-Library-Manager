import { IBook } from "../models/books";
import api from "./api";

export const fetchBooks = () => api.get<IBook[]>('/books').then((res) => res.data);

export const addBook = (newBook: IBook) => api.post<IBook>('/books', newBook);

export const updateBook = (id: number, updatedBook: IBook) => api.put<IBook>(`/books/${id}`, updatedBook);

export const deleteBook = (id: number) => api.delete(`/books/${id}`);