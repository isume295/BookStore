import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItem: [],
};
const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItem.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.id;
      return {
        ...state,
        bookItem: state.bookItem.filter((book) => book.id !== bookId),
      };
    },

  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
