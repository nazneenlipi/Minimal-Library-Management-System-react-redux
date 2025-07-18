import { useGetBorrowBooksQuery } from "@/components/redux/api/baseApi";
import type { BorrowedBook } from "@/lib/book";

const BorrowedBooksTable = () => {
  const {
    data,
    isLoading,
    isError,
  } = useGetBorrowBooksQuery();

  if (isLoading)
    return (
      <p className="text-center text-gray-300">Loading borrowed books...</p>
    );

  if (isError)
    return (
      <p className="text-center text-red-400">
        Failed to fetch borrowed books.
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 bg-[#1f1f1f] border border-gray-700 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-white mb-4 text-center">
        📖 Borrowed Books Summary
      </h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-300 border-b border-gray-600">
            <th className="py-2">Title</th>
            <th className="py-2">ISBN</th>
            <th className="py-2 text-center">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item: BorrowedBook, index: number) => (
            <tr
              key={index}
              className="border-b border-gray-700 hover:bg-gray-800"
            >
              <td className="py-2 text-white">{item.book.title}</td>
              <td className="py-2 text-gray-300">{item.book.isbn}</td>
              <td className="py-2 text-center text-orange-400 font-semibold">
                {item.totalQuantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooksTable;
