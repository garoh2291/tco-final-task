import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPostsThunk } from "../../Redux/postsSlice";
import { PostsBody } from "./PostsBody";
import { PostHeader } from "./PostsHeader";
import "./styles.css";

export const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPostsThunk());
  }, [dispatch]);
  return (
    <div className="pasts_main_page">
      <PostHeader />
      <PostsBody />
    </div>
  );
};
