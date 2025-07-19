export default interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface BorrowedBook {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}


export interface ApiErrorResponse {
  success: false;
  message: string;
  error: string;
}

export interface BorrowFormData {
  quantity: number;
  date: string;
}
