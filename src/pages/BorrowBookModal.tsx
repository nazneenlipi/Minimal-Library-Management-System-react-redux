import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FaBookOpen } from "react-icons/fa";
import { useBorrowBookMutation, useGetBooksQuery } from "@/components/redux/api/baseApi";
import type Book from "@/lib/book";
import type { ApiErrorResponse, BorrowFormData } from "@/lib/book";
import { useNavigate } from "react-router";

interface BorrowBookModalProps {
  book: Book;
}

const BorrowBookModal = ({ book }: BorrowBookModalProps) => {
  const [open, setOpen] = useState(false);
   const { refetch } = useGetBooksQuery();
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
 const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BorrowFormData>({
    defaultValues: {
      quantity: 1,
      date: new Date(new Date().setDate(new Date().getDate() + 14))
        .toISOString()
        .split("T")[0],
    },
    mode: "onChange",
  });

  const onSubmit = async (data: BorrowFormData) => {
    const requestData = {
      book: book._id,
      quantity: data.quantity,
      dueDate: data.date,
    };
    console.log("Sending borrow request with data:", requestData);
    console.log("Book object:", book);
    console.log("Book ID:", book._id);

    try {
      const response = await borrowBook(requestData).unwrap();
      console.log("Success response:", response);
      toast.success("Book borrowed successfully!");
        refetch();
      setOpen(false);
      reset();
          navigate("/borrow-summary");
    } catch (error) {
      console.error("Error borrowing book:", error);
      console.error("Request data that failed:", requestData);

      // More detailed error handling
      if (error && typeof error === "object" && "data" in error) {
        const errorData = error.data as ApiErrorResponse;
        console.error("Server error details:", errorData);
        toast.error(errorData.error || "Failed to borrow book.");
      } else {
        toast.error("Failed to borrow book.");
      }
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) {
      reset({
        quantity: 1,
        date: new Date(new Date().setDate(new Date().getDate() + 14))
          .toISOString()
          .split("T")[0],
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <FaBookOpen />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] bg-[#121212] text-white border border-stone-700 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-white text-lg font-semibold">
            Borrow Book: {book.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-400">
            Fill out the form to borrow this book.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className="pb-2" htmlFor="date">Return Date *</Label>
            <Input
              type="date"
              id="date"
              {...register("date", {
                required: "Date is required",
                validate: (value) => {
                  const selectedDate = new Date(value);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return (
                    selectedDate > today || "Return date must be in the future"
                  );
                },
              })}
              className="bg-[#1e1e1e] text-white border-stone-700"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <Label className="pb-2" htmlFor="quantity">Quantity *</Label>
            <Input
              type="number"
              id="quantity"
              min="1"
              max={book.copies}
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Must be at least 1" },
                max: {
                  value: book.copies,
                  message: `Maximum ${book.copies} books available`,
                },
                valueAsNumber: true,
              })}
              className="bg-[#1e1e1e] text-white border-stone-700"
            />
            <p className="text-xs text-gray-400 mt-1">
              Available: {book.copies} books
            </p>
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading || !book.available}>
              {isLoading ? "Borrowing..." : "Borrow Book"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowBookModal;
