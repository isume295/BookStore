import React from 'react';
// import BookItem from '../components/BookItem';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

export default function Home() {
  return (
    <div>
      <BookList />
      <AddBook />
    </div>
  );
}
