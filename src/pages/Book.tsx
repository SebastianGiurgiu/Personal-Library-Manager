import React from 'react';
import { useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { addBook, updateBook } from '../services/book';

const Book: React.FC = () => {
  const { id } = useParams();
  const isEditing = !!id;

  return (
      <BookForm
        onSubmit={(value) => { isEditing ? updateBook(Number(id), value) : addBook(value)}}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
      />
  );
};

export default Book;
