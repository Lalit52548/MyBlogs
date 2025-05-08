"use client";
import { createPost, hidePost } from "@/app/redux/PostSlice";
import { fetchCategories } from "@/app/redux/CategorySlice";
import { CldUploadWidget } from "next-cloudinary";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

const TextEdit = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const [postDetail, setPostDetails] = useState({
    title: "",
    description: "",
    image: "",
    userId: "",
    category: "", // this will hold the category ID now
  });
  const [imageUploaded, setImageUploaded] = useState(false);

  const userId = useSelector((state) => state.user.entity.data.id);
  const { categories, loading } = useSelector((state) => state.category);

  // Set user ID to post
  useEffect(() => {
    setPostDetails((prevDetails) => ({
      ...prevDetails,
      userId: userId,
    }));
  }, [userId]);

  // Fetch categories on mount
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setPostDetails({
      ...postDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (imageData) => {
    if (!imageData.info.secure_url) {
      setImageUploaded(false);
      return;
    }
    setPostDetails({
      ...postDetail,
      image: imageData.info.secure_url,
    });
    setImageUploaded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serializablePostDetail = {
      title: postDetail.title,
      description: postDetail.description,
      userId: postDetail.userId,
      image: postDetail.image ?? "/vercel.svg",
      categoryId: postDetail.category, // now contains ID
    };

    dispatch(createPost({ postDetail: serializablePostDetail }));
    dispatch(hidePost());
    toast({
      title: "Post created",
      description: "Your post has been created successfully",
      variant: "default",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative p-5 flex-col bg-indigo-800 rounded-md shadow-md dark:bg-gray-800"
    >
      <div className="flex w-full">
        <label htmlFor="title" className="w-full text-white dark:text-gray-200">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={postDetail.title}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            placeholder="Title"
            required
          />
        </label>
      </div>

      <div className="flex w-full mt-4">
        <label htmlFor="description" className="w-full text-white dark:text-gray-200">
          Description:
          <textarea
            name="description"
            id="description"
            rows="3"
            cols={50}
            value={postDetail.description}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            placeholder="Description"
            required
          ></textarea>
        </label>
      </div>

      <div className="flex w-full mt-4">
        <label htmlFor="category" className="w-full text-white dark:text-gray-200">
          Category:
          <select
            name="category"
            id="category"
            value={postDetail.category}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {loading ? (
              <option>Loading...</option>
            ) : (
              categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name.trim()}
                </option>
              ))
            )}
          </select>
        </label>
      </div>

      <div className="flex w-full mt-4">
        {postDetail.title && postDetail.description ? (
          <CldUploadWidget
            options={{
              sources: ["local", "url", "unsplash"],
              multiple: false,
              maxFiles: 1,
            }}
            signatureEndpoint={"/api/sign-image"}
            onSuccess={handleImageUpload}
            onError={(error) => {
              console.error("Upload failed:", error);
              toast({
                title: "Image upload failed",
                description: "Please try again",
                variant: "destructive",
              });
            }}
          >
            {({ open }) => {
              return (
                <button
                  className="w-full px-3 py-2 text-white bg-gray-700 border dark:bg-indigo-600 rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-900 dark:hover:bg-indigo-700 disabled:opacity-25 transition ease-in-out duration-150"
                  onClick={open}
                  type="button"
                >
                  Upload Image
                </button>
              );
            }}
          </CldUploadWidget>
        ) : null}
      </div>

      <div className="flex w-full mt-4">
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-black rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TextEdit;
