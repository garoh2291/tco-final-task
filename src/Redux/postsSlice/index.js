import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../data";

export const setPostsThunk = createAsyncThunk(
  "posts/setPostsThunk",
  function (_, { dispatch, rejectWithValue }) {
    fetch(BACKEND_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error("Something Wrong");
        }
        dispatch(setPosts({ data }));
      })
      .catch((err) => rejectWithValue(err));
  }
);

export const deletePostsThunk = createAsyncThunk(
  "posts/deletePostsThunk",
  function (id, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error("Something Wrong");
        }
        dispatch(deletePost({ id }));
      })
      .catch((err) => console.log(err));
  }
);

export const changePostThunk = createAsyncThunk(
  "posts/changePostThunk",
  function ({ id, editFormData }, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ editFormData }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error("Something Wrong");
        }
        dispatch(changePost({ id, editFormData }));
      })
      .catch((err) => console.log(err));
  }
);

export const addPostThunk = createAsyncThunk(
  "posts/addPostThunk",
  function (newPost, { dispatch, rejectWithValue }) {
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error("Something Wrong");
        }
        dispatch(addPost({ data }));
      })
      .catch((err) => console.log(err));
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    error: null,
    status: null,
  },
  reducers: {
    setPosts(state, action) {
      const postFromBackend = action.payload.data;
      return {
        ...state,
        posts: postFromBackend,
      };
    },
    deletePost(state, action) {
      const deletedPostId = action.payload.id;
      const posts = state.posts.filter((post) => post.id !== deletedPostId);
      return {
        ...state,
        posts,
      };
    },
    changePost(state, action) {
      const newPost = action.payload.editFormData;
      const id = action.payload.id;
      const posts = state.posts.map((post) => {
        if (post.id === id) {
          return newPost;
        }
        return post;
      });

      return {
        ...state,
        posts,
      };
    },
    addPost(state, action) {
      const newPost = action.payload.data;
      const posts = [...state.posts, newPost];
      return {
        ...state,
        posts,
      };
    },
  },
});

const { setPosts, deletePost, changePost, addPost } = postSlice.actions;

export default postSlice.reducer;
