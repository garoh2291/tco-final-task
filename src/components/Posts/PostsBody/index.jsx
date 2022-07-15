import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostsThunk } from "../../../Redux/postsSlice";
import { CardComponent } from "../../Card";
import { EditPostModal } from "../../EditPostModal";
import "./styles.css";

export const PostsBody = () => {
  const { posts } = useSelector((state) => state.posts);
  const [isEditOpen, setIsEditModalOpen] = useState(false);
  const [editModalPost, setEditModalPost] = useState(null);

  const dispatch = useDispatch();

  const editModalOpen = useCallback(
    (post) => {
      if (isEditOpen) {
        setIsEditModalOpen(false);
        setEditModalPost(null);
      } else {
        setIsEditModalOpen(true);
        setEditModalPost(post);
      }
    },
    [isEditOpen]
  );

  const deleteHandle = (id) => {
    dispatch(deletePostsThunk(id));
  };

  if (!posts) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="posts_body">
      {posts.map((post) => {
        return (
          <CardComponent
            key={post.id}
            post={post}
            deleteHandle={deleteHandle}
            editModalOpen={editModalOpen}
          />
        );
      })}
      {isEditOpen && (
        <EditPostModal
          onClose={() => setIsEditModalOpen(false)}
          editModalPost={editModalPost}
        />
      )}
    </div>
  );
};
