import React, { useState } from 'react';
import { styled } from 'styled-components';
import BookItem from './BookItem';

export default function BookList() {
  const [books] = useState([
    {
      id: 1,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      category: 'Non-fiction',
      completed: false,
    },
    {
      id: 2,
      title: '80% mindset 10% skill',
      author: 'dev gadhvi',
      category: 'Non-fiction',
      completed: false,
    },
  ]);

  return (
    <Div>
      {books.map((book) => (
        <BookItem
          key={book.id}
          list={book}
        />
      ))}
    </Div>
  );
}

const Div = styled.div`
width: 100%;

`;
