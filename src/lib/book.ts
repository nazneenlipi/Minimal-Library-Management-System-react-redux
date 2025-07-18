export default interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  quantity: number;
  available: boolean;
}

export interface BorrowedBook {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}
