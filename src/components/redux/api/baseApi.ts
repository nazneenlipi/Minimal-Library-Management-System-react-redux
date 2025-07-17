import type Book from "@/lib/book";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mongoose-book-server-moduler-patter.vercel.app/api",
  }),
  tagTypes: ["Books"],
  endpoints: (build) => ({
    getBooks: build.query({
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
    }),
    getBooksById: build.query<Book, string>({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: "Books", id }],
    }),
    deleteBook:build.mutation<{success:boolean , id:number},number>({
      query(id){
        return{
          url:`/books/${id}`,
          method:"DELETE"
        }
      }
    })
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useGetBooksByIdQuery ,useDeleteBookMutation } =
  baseApi;
