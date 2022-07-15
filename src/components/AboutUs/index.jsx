import React from "react";
import { AboutDetailPage } from "./AboutDetailPage";
import { AboutPhotoPage } from "./AboutPhotoPage";
import "./styles.css";

export const AboutUs = () => {
  return (
    <div className="about_us_layout">
      <AboutPhotoPage />
      <AboutDetailPage />
    </div>
  );
};
