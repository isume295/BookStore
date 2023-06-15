import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

export default function BookList() {
  const { bookItem } = useSelector((store) => store.book);

  return (
    <Div>
      {bookItem.map((book) => (
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
