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
export function AddBook() {
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
  const onSubmit = (data: Book) => {
    console.log("Submit", data);
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Book</Button>
      </DialogTrigger>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent className="sm:max-w-[480px] bg-[#121212] border border-stone-700 rounded-xl">
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
                {...register("title", { required: "Title is required" })}
                className="bg-[#1e1e1e] border border-stone-700 text-white"
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
                {...register("author", { required: "Author is required" })}
                className="bg-[#1e1e1e] border border-stone-700 text-white"
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
                {...register("genre", { required: "Genre is required" })}
                className="bg-[#1e1e1e] border border-stone-700 text-white"
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
                {...register("isbn", { required: "ISBN is required" })}
                className="bg-[#1e1e1e] border border-stone-700 text-white"
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
                {...register("copies", {
                  required: "Copies is required",
                  min: { value: 0, message: "Copies cannot be negative" },
                })}
                className="bg-[#1e1e1e] border border-stone-700 text-white"
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
              className="w-full bg-[#1e1e1e] border border-stone-700 rounded-md p-2 text-white resize-none"
              placeholder="Add book description..."
            />
          </div>

          <DialogFooter className="mt-6 flex justify-end gap-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add Book</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
