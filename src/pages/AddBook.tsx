import { useAddBookMutation } from "@/components/redux/api/baseApi";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type Book from "@/lib/book";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

interface AddBookProps {
  buttonText?: string;
  variant?: "default" | "outline" | "ghost" | "destructive";
}

export function AddBook({
  buttonText = "Add New Book",
  variant = "outline",
}: AddBookProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Book>({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      copies: 0,
      available: true,
      description: "",
    },
  });

  const [addBook, { isLoading, isError }] = useAddBookMutation();

  const onSubmit = async (data: Book) => {
    console.log("Form submitted with data:", data);

    try {
      const bookData = {
        title: data.title.trim(),
        author: data.author.trim(),
        genre: data.genre.trim(),
        isbn: data.isbn.trim(),
        copies: Number(data.copies),
        available: Boolean(data.available),
        description: data.description?.trim() || "",
      };

      console.log("Sending book data:", bookData);

      const response = await addBook(bookData).unwrap();

      console.log("API response:", response);

      if (response.success) {
        toast.success("Book has been created successfully!");
        reset();
        setIsOpen(false);
      } else {
        toast.error(response.message || "Failed to add book.");
      }
    } catch (error: any) {
      console.error("Error adding book:", error);
      if (error?.data?.message) {
        toast.error(error.data.message);
      } else if (error?.message) {
        toast.error(error.message);
      } else {
        toast.error("Failed to add book. Please try again.");
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submit triggered");
    handleSubmit(onSubmit)();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} onClick={() => setIsOpen(true)}>
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[480px] bg-[#121212] border border-stone-700 rounded-xl">
        <form onSubmit={handleFormSubmit}>
          <DialogHeader>
            <DialogTitle className="text-white text-lg font-semibold">
              Add New Book
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-400">
              Fill out the form to add a new book to the collection.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <Label htmlFor="title" className="text-gray-300 mb-1">
                Title *
              </Label>
              <Input
                id="title"
                placeholder="Enter book title"
                {...register("title", {
                  required: "Title is required",
                  minLength: { value: 1, message: "Title cannot be empty" },
                })}
                className="bg-[#1e1e1e] border border-stone-700 text-white placeholder:text-gray-500"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <Label htmlFor="author" className="text-gray-300 mb-1">
                Author *
              </Label>
              <Input
                id="author"
                placeholder="Enter author name"
                {...register("author", {
                  required: "Author is required",
                  minLength: { value: 1, message: "Author cannot be empty" },
                })}
                className="bg-[#1e1e1e] border border-stone-700 text-white placeholder:text-gray-500"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.author.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <Label htmlFor="genre" className="text-gray-300 mb-1">
                Genre *
              </Label>
              <Input
                id="genre"
                placeholder="Enter book genre"
                {...register("genre", {
                  required: "Genre is required",
                  minLength: { value: 1, message: "Genre cannot be empty" },
                })}
                className="bg-[#1e1e1e] border border-stone-700 text-white placeholder:text-gray-500"
              />
              {errors.genre && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.genre.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <Label htmlFor="isbn" className="text-gray-300 mb-1">
                ISBN *
              </Label>
              <Input
                id="isbn"
                placeholder="Enter ISBN number"
                {...register("isbn", {
                  required: "ISBN is required",
                  minLength: { value: 1, message: "ISBN cannot be empty" },
                })}
                className="bg-[#1e1e1e] border border-stone-700 text-white placeholder:text-gray-500"
              />
              {errors.isbn && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.isbn.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <Label htmlFor="copies" className="text-gray-300 mb-1">
                Copies *
              </Label>
              <Input
                id="copies"
                type="number"
                placeholder="Number of copies"
                defaultValue={1}
                {...register("copies", {
                  required: "Number of copies is required",
                  min: { value: 1, message: "At least 1 copy is required" },
                  valueAsNumber: true,
                })}
                className="bg-[#1e1e1e] border border-stone-700 text-white placeholder:text-gray-500"
              />
              {errors.copies && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.copies.message}
                </p>
              )}
            </div>

            <div className="flex items-center mt-6">
              <input
                id="available"
                type="checkbox"
                defaultChecked={true}
                {...register("available")}
                className="w-4 h-4 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500"
              />
              <Label
                htmlFor="available"
                className="ml-2 text-gray-400 cursor-pointer select-none"
              >
                Available
              </Label>
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="description" className="text-gray-300 mb-1 block">
              Description
            </Label>
            <textarea
              id="description"
              {...register("description")}
              rows={4}
              className="w-full bg-[#1e1e1e] border border-stone-700 rounded-md p-2 text-white resize-none placeholder:text-gray-500"
              placeholder="Add book description..."
            />
          </div>

          <DialogFooter className="mt-6 flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  reset();
                  setIsOpen(false);
                }}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Book"}
            </Button>
          </DialogFooter>

          {isError && (
            <div className="mt-4">
              <p className="text-red-500 text-sm">
                Failed to add book. Please check all fields and try again.
              </p>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
