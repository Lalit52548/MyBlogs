"use client";
import { AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { ModeToggle } from "@/components/themeToggle";
import { showPost } from "@/app/redux/PostSlice";
import Link from "next/link";
import Searchitem from "./Searchitem";
import Image from "next/image";

const Header = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.entity);
  const name = user?.data?.name || "Guest";
  console.log(user?.data?.name)
  return (
    <div className="p-4 bg-gray-100 dark:bg-black flex justify-between items-center w-full">
      {/* Logo or Left Side Placeholder */}
      <div className="text-xl font-bold flex text-gray-800 dark:text-white align-middle">
      <Image
        src={"/mainlogo.png"}
        width={80}
        height={70}
        alt="logo"
        className="m-2"
      />
      <div>
        <h2 className="font-bold text-base md:text-xl lg:text-4xl">
          Welcome,{" "}
          <span className="text-indigo-600">{name}</span>!
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          Nest your thoughts. Hatch your blog.
        </p>
      </div>
      </div>

      {/* Right Side: Search + Buttons */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <Searchitem />

        {/* Post or Login */}
        {user && user?.data ? (
          <Button onClick={() => dispatch(showPost())} variant="default">
            POST
          </Button>
        ) : (
          <Button variant="default">
            <Link href="/signup">Login</Link>
          </Button>
        )}

        {/* Theme Toggle */}
        <ModeToggle />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="dark:bg-gray-900 bg-white rounded-md p-1 shadow-md"
            onClick={() => setShow(!show)}
          >
            <AlignRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
