import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postsSlice";
import messageSlice from "./messageSlice";

export default configureStore({
  reducer: {
    messages: messageSlice,
    posts: postSlice,
  },
});
