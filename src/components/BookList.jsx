import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import BookItem from './BookItem';
import { getBooks } from '../redux/books/booksSlice';

export default function BookList() {
  const { bookItem, isLoading } = useSelector((store) => store.book);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookItemComponents = Object.keys(bookItem).flatMap((key) => bookItem[key].map((book) => (
    <BookItem
      key={`${key}-${book.title}`}
      list={{ item_id: key, ...book }}
    />
  )));

  return (
    <Div>
      <div className="status"><h4>{isLoading === true ? 'Loading...' : '' }</h4></div>
      {bookItemComponents}
    </Div>
  );
}

const Div = styled.div`
width: 100%;
.status{
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
