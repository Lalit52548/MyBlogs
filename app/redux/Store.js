import { configureStore } from "@reduxjs/toolkit";
import UserSignupLoginSlice from "./UserSignupLoginSlice";
import PostSlice from "./PostSlice";
import CommentSlice from "./CommentSlice";
import updateSlice from "./UpdateSlice";
import CategorySlice from "./CategorySlice";

export const store = configureStore({
  reducer: {
    user: UserSignupLoginSlice,
    post: PostSlice,
    commnet: CommentSlice,
    update: updateSlice,
    category: CategorySlice,
  },
});
