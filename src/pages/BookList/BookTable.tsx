import React from 'react';
import { Link } from 'react-router-dom';

import {
  Delete,
  Edit,
  Visibility
} from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from '@mui/material';

import { IBook } from '../../models/books';
import './BookList.css';

const MAX_DESCRIPTION_LENGTH = 50;

interface Props {
  books: IBook[];
  handleDeleteClick: (id: number) => void;
}

const BookTable: React.FC<Props> = ({ books, handleDeleteClick }) => {

  return (
    <TableContainer component={Paper} className="responsive-table-container">
      <Table>
        <TableHead className="table-header">
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Genre</TableCell>
            {/* Hide 'Description' column on extra small (xs) screens, display on small (sm) and larger screens */}
            <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>

              {/* Hide 'Description' column on extra small (xs) screens, display on small (sm) and larger screens */}
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
                <Tooltip title={book.description} arrow>
                  <div className="description-cell">
                    {/* Truncate long descriptions */}
                    {book.description.length > MAX_DESCRIPTION_LENGTH
                      ? `${book.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
                      : book.description}
                  </div>
                </Tooltip>
              </TableCell>

              <TableCell>
                <IconButton component={Link} to={`/books/${book.id}`} color="primary">
                  <Visibility />
                </IconButton>
                <IconButton component={Link} to={`/books/edit/${book.id}`} color="primary">
                  <Edit />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDeleteClick(Number(book.id))}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookTable;
