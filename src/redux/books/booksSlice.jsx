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
      const bookId = action.payload;
      return {
        ...state,
        bookItem: state.bookItem.filter((book) => book.id !== bookId),
      };
    },

  },

});

export default booksSlice.reducer;
