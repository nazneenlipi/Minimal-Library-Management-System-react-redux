import type Book from "@/lib/book";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mongoose-book-server-moduler-patter.vercel.app/api",
  }),
  tagTypes: ["Books", "Book"],
  endpoints: (build) => ({
    getBooks: build.query<Book[], void>({
      query: () => "/books",
    }),
    
    addBook: build.mutation<Book, Partial<Book>>({
      query(body) {
        return {
          url: `/books`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    
    getBooksById: build.query<Book, string>({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: "Books", id }],
    }),
    
    updateBook: build.mutation<Book, { id: string } & Partial<Book>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/books/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Books", id },
        { type: "Books", id: "LIST" },
      ],
    }),
    
    deleteBook: build.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `/books/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: "Books", id },
        { type: "Books", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBooksByIdQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = baseApi;