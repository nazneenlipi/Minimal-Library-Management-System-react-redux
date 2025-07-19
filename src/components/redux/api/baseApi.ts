import type { BorrowedBook } from "@/lib/book";
import type Book from "@/lib/book";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
interface BorrowBookRequest {
  book: string;
  quantity: number;
  dueDate: string;
}
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mongoose-book-server-moduler-patter.vercel.app/api",
  }),
  tagTypes: ["Books", "Book", "Borrow"],
  endpoints: (build) => ({
    getBooks: build.query<ApiResponse<Book[]>, void>({
      query: () => "/books",
      providesTags: ["Books"],
    }),

    addBook: build.mutation<ApiResponse<Book>, Partial<Book>>({
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
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
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
      invalidatesTags: (_result, _error, { id }) => [
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
      invalidatesTags: (_result, _error, id) => [
        { type: "Books", id },
        { type: "Books", id: "LIST" },
      ],
    }),

    // Updated borrowBooks query
    getBorrowBooks: build.query<ApiResponse<BorrowedBook[]>, void>({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),

    borrowBook: build.mutation<ApiResponse<BorrowedBook>, BorrowBookRequest>({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBooksByIdQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetBorrowBooksQuery,
  useBorrowBookMutation,
} = baseApi;
