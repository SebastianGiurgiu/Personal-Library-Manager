import React from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

import {
  Box,
  Button,
  Typography
} from '@mui/material';

import { deleteBook, fetchBooks } from '../../services/book';

import CircularLoader from '../../components/CicularLoader';
import DeleteBookDialog from '../../components/DeleteBookDialog';
import { useBooks } from '../../contexts/BookContext';
import { IBook } from '../../models/books';
import './BookList.css';
import BookTable from './BookTable';

const BookList: React.FC = () => {
  const { data: books, error, mutate } = useSWR('/books', fetchBooks);
  const { setBooks } = useBooks();
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [selectedBookId, setSelectedBookId] = React.useState<number | null>(null);

  React.useEffect(() => {
    // Update global books state when the data changes
    setBooks(books as IBook[]);
  }, [books])

  const handleDeleteClick = (bookId: number) => {
    setSelectedBookId(bookId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedBookId) {
      // Delete a book, mutate data, and close delete dialog
      await deleteBook(selectedBookId);
      mutate();
      setDeleteDialogOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setSelectedBookId(null);
    setDeleteDialogOpen(false);
  };

  // Display error message if there is an error fetching books
  if (error) return <div>Error loading books...</div>;

  // Display loading spinner while fetching books data
  if (!books) return <CircularLoader />;

  return (
    <div className="book-list-container">
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          component={Link}
          to="/books/add"
          variant="contained"
          color="primary"
        >
          Add Book
        </Button>
      </Box>

      <BookTable books={books} handleDeleteClick={handleDeleteClick} />

      <DeleteBookDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />

    </div>
  );
};

export default BookList;
