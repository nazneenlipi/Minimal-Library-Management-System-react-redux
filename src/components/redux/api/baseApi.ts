import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mongoose-book-server-moduler-patter.vercel.app/api",
  }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetBooksQuery } = baseApi;
