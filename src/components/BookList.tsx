import React from 'react';
import useSWR from 'swr'
import api from '../services/api';

const BookList: React.FC = () => {
  const { data: books, error } = useSWR('/books', () => api.get('/books').then((res) => res.data));

  if (error) return <div>Error loading books...</div>;
  if (!books) return <div>Loading...</div>;

  return (
    <div>
      <h2>Book List</h2>
      {/* Render the list of books */}
    </div>
  );
};

export default BookList;
