import { useGetBooksByIdQuery } from "@/components/redux/api/baseApi";
import type Book from "@/lib/book";
import { useParams } from "react-router";

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
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">{book.title}</h1>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <p>
        <strong>Copies:</strong> {book.copies}
      </p>
      <p>
        <strong>Status:</strong> {book.available ? "Available" : "Unavailable"}
      </p>
    </div>
  );
};

export default BookDetails;
