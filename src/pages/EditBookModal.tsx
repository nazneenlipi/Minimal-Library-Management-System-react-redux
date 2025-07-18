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
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { FaEdit } from "react-icons/fa";
import type Book from "@/lib/book";
import { useUpdateBookMutation } from "@/components/redux/api/baseApi";
import { toast } from "sonner"; 
const EditBookModal = ({ book }: { book: Book }) => {
  const [open, setOpen] = useState(false);
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: book,
    mode: "onChange",
  });

  const onSubmit = async (data: Book) => {
    try {
      console.log("Submitting data:", data);

      await updateBook({
        id: book._id,
        ...data,
      }).unwrap();

      setOpen(false);
      toast.success("Book updated successfully!");
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null) {
        const err = error as { data?: { message?: string }; message?: string };

        if (err?.data?.message) {
          toast.error(`Update failed: ${err.data.message}`);
        } else if (err?.message) {
          toast.error(`Update failed: ${err.message}`);
        } else {
          toast.error("Failed to update book. Please try again.");
        }
      } else {
        toast.error("Unknown error occurred.");
      }
    }
  };

  // Reset form when modal opens
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) {
      reset(book);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <FaEdit />
        </Button>
      </DialogTrigger>

      <DialogContent  aria-describedby="dialog-description" className="sm:max-w-[600px] bg-[#121212] text-white border border-stone-700 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-white text-lg font-semibold">
            Edit Book
          </DialogTitle>
           <DialogDescription className="text-sm text-gray-400">
              Fill out the form to edit a new book to the collection.
            </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                className="bg-[#1e1e1e] text-white border-stone-700"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message as string}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="author">Author *</Label>
              <Input
                id="author"
                {...register("author", { required: "Author is required" })}
                className="bg-[#1e1e1e] text-white border-stone-700"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.author.message as string}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="genre">Genre *</Label>
              <Input
                id="genre"
                {...register("genre", { required: "Genre is required" })}
                className="bg-[#1e1e1e] text-white border-stone-700"
              />
              {errors.genre && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.genre.message as string}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="isbn">ISBN *</Label>
              <Input
                id="isbn"
                {...register("isbn", { required: "ISBN is required" })}
                className="bg-[#1e1e1e] text-white border-stone-700"
              />
              {errors.isbn && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.isbn.message as string}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="copies">Copies *</Label>
              <Input
                type="number"
                id="copies"
                {...register("copies", {
                  required: "Copies is required",
                  min: { value: 0, message: "Must be 0 or greater" },
                  valueAsNumber: true, // Important: convert to number
                })}
                className="bg-[#1e1e1e] text-white border-stone-700"
              />
              {errors.copies && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.copies.message as string}
                </p>
              )}
            </div>

            <div className="flex items-center mt-6 gap-2">
              <Checkbox
                id="available"
                checked={watch("available")}
                onCheckedChange={(checked) =>
                  setValue("available", Boolean(checked))
                }
              />
              <Label htmlFor="available" className="text-white">
                Available
              </Label>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              {...register("description")}
              className="bg-[#1e1e1e] text-white border-stone-700 resize-none"
              placeholder="Add book description..."
            />
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Book"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookModal;
