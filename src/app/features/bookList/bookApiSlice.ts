import { apiSlice } from "@/app/api/apiSlice";
import { Book } from "@/types/book";

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
    }),
    addBook: builder.mutation<Book[], Book>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        data: { ...book },
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = booksApiSlice;
