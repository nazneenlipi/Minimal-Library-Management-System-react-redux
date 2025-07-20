import { useGetBooksByIdQuery } from "@/components/redux/api/baseApi";
import type Book from "@/lib/book";
import { useParams } from "react-router";
import books from "@/assets/book.jpg"
const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBooksByIdQuery(id ?? "", {
    skip: !id,
  });

  if (isLoading) return <p>Loading book details...</p>;
  if (isError) return <p>Failed to load book details.</p>;

  const book = (data as any)?.data as Book;
  if (!book) <p>Book not found.</p>;
  return (
    <div className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Book Cover */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl border border-gray-700">
          <img
            src={books}
            alt={book.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full h-1/2 rounded-b-3xl" />
        </div>

        {/* Book Details Card */}
        <div className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-3xl p-10 shadow-2xl">
          <h1 className="text-4xl font-bold mb-6">{book.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 text-base">
            <div>
              <p className="mb-2">
                <span className="block text-sm font-semibold text-gray-500">
                  Author
                </span>
                {book.author}
              </p>
              <p className="mb-2">
                <span className="block text-sm font-semibold text-gray-500">
                  Genre
                </span>
                {book.genre}
              </p>
              <p className="mb-2">
                <span className="block text-sm font-semibold text-gray-500">
                  ISBN
                </span>
                {book.isbn}
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="block text-sm font-semibold text-gray-500">
                  Copies
                </span>
                {book.copies}
              </p>
              <p className="mb-2">
                <span className="block text-sm font-semibold text-gray-500">
                  Status
                </span>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
                    ${
                      book.available
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                >
                  {book.available ? "Available" : "Unavailable"}
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3 text-white">
              Description
            </h2>
            <p className="text-gray-400 leading-relaxed">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
