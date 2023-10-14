import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: null
  },
  reducers: {
    getBooks: (state, action) => {
      const { data } = action.payload;
      state.books = data;
      console.log(state.books);
    }
  },
});

export const { getBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
