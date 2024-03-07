import React from 'react';
import './App.css';
import Router from './router';
import { BooksProvider } from './contexts/BookContext';


const App: React.FC = () => {
  return (
    <BooksProvider>
      <Router />
    </BooksProvider>
  );
};

export default App;

