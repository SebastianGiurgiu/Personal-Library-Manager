import React from 'react';

import { Snackbar } from '@mui/material';

import BookForm from '../../forms/BookForm';
import { addBook } from '../../services/book';
import useSnackbar from '../../hooks/useSnackBar';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../models/books';

const AddBokk: React.FC = () => {
  const navigate = useNavigate();
  const { open, message, showSnackbar, hideSnackbar } = useSnackbar();

  const handleAddBook = (value: IBook) => {
    addBook(value)
      .then(() => {
        showSnackbar('Book added successfully');

        // Navigate to the books page after a delay, indicating a successful addition
        setTimeout(() => {
          navigate('/books');
        }, 1000);
      })
      .catch((error) => {
        showSnackbar(`Error adding book: ${error.message}`);
      });
  };

  return (
    <>
      <BookForm
        onSubmit={handleAddBook}
        submitButtonLabel={'Add'} />

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={hideSnackbar}
        message={message} />
    </>
  );
};

export default AddBokk;
