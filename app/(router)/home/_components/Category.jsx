"use client";
import { fetchCategories } from "@/app/redux/CategorySlice";
import { getAllPosts } from "@/app/redux/PostSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.category);
  const [selectedCategory, setSelectedCategory] = useState(undefined);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleFilter = (event) => {
    setSelectedCategory(event.target.attributes.itemid?.value ?? undefined);
    console.log("Filter by:", event.target.attributes.itemid?.value ?? undefined);
    dispatch(getAllPosts({ categoryId: event.target.attributes.itemid?.value ?? undefined }));
  };

  return (
    <div className="mt-4 bg-gray-100 dark:bg-black rounded-xl p-2">
      <div className="flex gap-3 overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        {[{ id:undefined ,name: 'All' },...categories].map((category) => (
          <button
            key={category.id}
            itemID={category.id}
            onClick= {handleFilter} 
            className={`px-4 py-2 rounded-full text-sm font-medium border shrink-0 transition-all duration-200 ${
              selectedCategory === category.id
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
