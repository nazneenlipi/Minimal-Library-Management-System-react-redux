import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/components/redux/api/baseApi";
import type Book from "@/lib/book";
import { FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

import { toast } from "sonner";
import EditBookModal from "./EditBookModal";

export const Books = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  if (isLoading) return <p className="text-center text-gray-300">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-400">Something went wrong!</p>;

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast.success("Book delete");
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete book.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-white mb-14 text-center">
        📚 Our Book Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data?.map((book: Book) => (
          <div
            key={book._id}
            className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] border border-gray-700 shadow-xl rounded-2xl p-5 hover:scale-[1.02] hover:shadow-gray-500/40 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-gray-100 mb-2">
              {book.title}
            </h3>
            <p className="text-sm text-gray-400 mb-1">Author: {book.author}</p>
            <p className="text-sm text-gray-400 mb-1"> Genre: {book.genre}</p>
            <p className="text-sm text-gray-400 mb-1"> ISBN: {book.isbn}</p>
            <p className="text-sm text-gray-400 mb-2">
              Description:{" "}
              <span className="text-gray-300">{book.description}</span>
            </p>
            <p className="text-sm text-gray-400 mb-1">
              📦 Copies: <span className="text-gray-300">{book.copies}</span>
            </p>

            <div className="flex justify-end items-center gap-4 mt-4">
              <p className="border border-stone-700 rounded-2xl px-2 py-1 text-sm">
                <span
                  className={book.available ? "text-green-400" : "text-red-400"}
                >
                  {book.available ? "Available" : "Unavailable"}
                </span>
              </p>

              <button className="p-2 rounded-full bg-gray-800 text-blue-400 hover:text-blue-500 hover:bg-gray-700 transition">
                <FaEye
                  onClick={() => navigate(`/books/${book._id}`)}
                  className="w-4 h-4"
                />
              </button>
              <div className="p-2 rounded-full bg-gray-800 text-green-400 hover:text-green-500 hover:bg-gray-700 transition">
                <EditBookModal book={book} />
              </div>
              <button className="p-2 rounded-full bg-gray-800 text-red-400 hover:text-red-500 hover:bg-gray-700 transition">
                <FaTrash
                  onClick={() => handleDelete(book._id)}
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
