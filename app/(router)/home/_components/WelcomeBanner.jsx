// "use client";
// import Image from "next/image";
// import { useSelector } from "react-redux";

// const WelcomeBanner = () => {
//   const user = useSelector((state) => state.user.entity);

//   const name = user?.data?.name || "Guest";

//   return (
//     <div className="flex gap-5 bg-gray-100 dark:bg-black rounded-xl p-2 items-center">
//       {/* image */}
//       <Image
//         src={"/mainlogo.png"}
//         width={80}
//         height={70}
//         alt="logo"
//         className="m-2"
//       />
//       <div>
//         <h2 className="font-bold text-base md:text-xl lg:text-4xl">
//           Welcome back,{" "}
//           <span className="text-indigo-600">{name}</span>!
//         </h2>
//         <p className="text-sm md:text-base text-gray-500">
//           Nest your thoughts. Hatch your blog.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default WelcomeBanner;
