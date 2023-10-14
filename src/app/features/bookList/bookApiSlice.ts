import { apiSlice } from "@/app/api/apiSlice";
import { Book } from "@/types/book";
import { User } from "@/types/user";
import { UserBook } from "@/types/user_types";

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
    getBooksUsers: builder.query<UserBook[], void>({
      query: () => ({
        url: "/user_book",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useGetBooksUsersQuery } = booksApiSlice;
