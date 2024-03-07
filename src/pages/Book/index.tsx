import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Snackbar } from '@mui/material';

import BookForm from '../../forms/BookForm';
import CircularLoader from '../../components/CicularLoader';
import { useBooks } from '../../contexts/BookContext';
import useSnackbar from '../../hooks/useSnackBar';
import { IBook } from '../../models/books';
import { updateBook } from '../../services/book';

interface Props {
  readonly?: boolean;
}

const Book: React.FC<Props> = ({ readonly }: Props) => {
  const { id } = useParams();
  const { books } = useBooks();
  const navigate = useNavigate();
  const { open, message, showSnackbar, hideSnackbar } = useSnackbar();

  const [book, setBook] = React.useState<IBook | null>(null);

  // Fetch and set the details of the selected book based on the URL parameter
  React.useEffect(() => {
    const foundBook = books.find((b) => b.id === Number(id));
    if (!foundBook && !!id) {
      // If the book is not found and there is an ID in the URL, navigate to the books page
      navigate("/books");
    }
    setBook(foundBook || null);
  }, []);


  const handleUpdateBook = (id: number, value: IBook) => {
    updateBook(Number(id), value)
      .then(() => {
        showSnackbar('Book updated successfully');
      })
      .catch((error) => {
        showSnackbar(`Error updating book: ${error.message}`);
      })
  }

  // If the book details are not available, display a loading spinner
  if (!book) {
    return <CircularLoader />;
  }

  return (
    <>
      <BookForm
        onSubmit={(value) => { handleUpdateBook(Number(id), value) }}
        submitButtonLabel={'Edit'}
        readonly={readonly}
        book={book} />

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={hideSnackbar}
        message={message} />
    </>
  );
};

export default Book;
