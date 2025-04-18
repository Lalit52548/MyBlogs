"use client";
import { getAllPostsofCategory } from "@/app/redux/PostSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const categories = [
  "All", "Business", "Technology", "History", "Lifestyle",
  "Health", "Travel", "Education", "Food", "Finance", "Art"
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    setSelectedCategory(category);
    console.log("Filter by:", category);
  };

  useEffect(() => {
    if (selectedCategory === 'All') {
      dispatch(getAllPostsofCategory(selectedCategory))
    } else { }
  }, [selectedCategory])

  return (
    <div className="mt-4 bg-gray-100 dark:bg-black rounded-xl p-2">
      <div className="flex gap-3 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border shrink-0 transition-all duration-200 ${selectedCategory === category
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
