import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/404Page";
import { AboutUsPage } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import { PostsPage } from "../pages/PostsPage";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutUsPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
