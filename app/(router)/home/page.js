"use client";
import Pagginate from "@/utils/Pagginate";
import AllBlogs from "./_components/AllBlogs";
import Category from "./_components/Category";
// import WelcomeBanner from "./_components/WelcomeBanner";
import { useSelector } from "react-redux";

const Home = () => {
  const post = useSelector((state) => state.post.blogs.data);
  return (
    <div className="grid grid-cols-1  p-4">
      {/* left container */}
      <div className="col-span-2">
        {/* <WelcomeBanner /> */}
        <Category/>
        <AllBlogs />
      </div>

      <div className="col-span-2 flex items-center justify-center my-5">
        {post?.length > 8 && <Pagginate />}
      </div>
    </div>
  );
};

export default Home;
