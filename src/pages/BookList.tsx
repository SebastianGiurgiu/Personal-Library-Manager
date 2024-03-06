import React from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { fetchBooks } from '../services/book';
import CircularLoader from '../components/CicularLoader';

const BookList: React.FC = () => {
  const { data: books, error } = useSWR('/books', fetchBooks);

  if (error) return <div>Error loading books...</div>;
  if (!books) return <CircularLoader />;

  return (
    <div>
      <h2>Book List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.description}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/books/${book.id}`} variant="contained" color="primary">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookList;
