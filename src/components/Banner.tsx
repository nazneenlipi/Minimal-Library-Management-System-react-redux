import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative light:bg-gray-200 dark:bg-black light:text-black dark:text-white rounded-xl w-auto mx-auto flex flex-col items-center justify-center text-center h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Discover Your Next Favorite Book
      </h1>
      <p className="text-lg max-w-xl opacity-90 mb-8">
        Explore our curated collection of timeless classics, modern bestsellers,
        and hidden gems. Dive into the world of stories today.
      </p>
      {/* <button
        type="button"
        className="px-8 py-3 rounded-full light:bg-black dark:bg-white dark:text-black light:text-white font-semibold shadow-xl hover:brightness-90 transition"
      >
        Browse Collection
      </button> */}

    <Button asChild>
      <Link to="/books">Browse Collection</Link>
    </Button>

    </section>
  );
};

export default Banner;
